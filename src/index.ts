import * as Errors from "./errors";
import * as Types from "./types";

/**
 * Represents the Vattenfall Europe Sales service, providing methods to interact with the service's API.
 */
export default class VattenfallEuropeSales {
    /**
     * The version number of the API that the application is currently using.
     * This variable helps in managing and differentiating between different
     * iterations or releases of the API.
     */
    public readonly api_version: number = 1.3;

    /**
     * The client's API identifier used for making requests.
     * This string is typically configured to represent the name or key
     * associated with the API client in use.
     */
    protected readonly api_client: string = "KSO";

    /**
     * A string representing the tenant identifier for the API.
     * This tenant id differentiates the API usage context
     * and allows the system to apply the appropriate configurations
     * and access controls.
     *
     * Example: "VESALES"
     */
    protected readonly api_tenant: string = "VESALES";

    /**
     * The number of seconds that an access token remains valid.
     *
     * This value determines the time-to-live (TTL) for access tokens,
     * ensuring they expire after a certain period of inactivity or usage.
     * Typically used to control session timeouts and enhance security.
     */
    public readonly access_token_ttl_seconds: number = 10 * 60;

    /**
     * The URI that points to the properties configuration file for the Vattenfall service.
     * This URI is used to fetch various properties and settings required for the service's operation.
     */
    public readonly service_properties_uri = "https://service.vattenfall.de/properties.json";

    /**
     * A unique identifier for a transaction.
     * This ID is used to track and reference individual transactions
     * within the system. It ensures that each transaction can be
     * distinctly identified.
     */
    public readonly transaction_id: string;

    /**
     * Represents the username of a user in the system.
     * This is a string that uniquely identifies a user.
     */
    protected readonly username: string;

    /**
     * Represents the password of a user.
     * This string is used for authenticating the user.
     * It should be kept confidential and secured.
     */
    protected readonly password: string;

    /**
     * Represents the properties associated with the service, retrieved at instantiation time from
     * {@link service_properties_uri}.
     */
    protected _properties?: Types.ServiceProperties;

    /**
     * Optional variable `_access_token_data` which holds the access token information.
     *
     * This variable may contain the data structure defined by the `AccessTokenData` type
     * in the `Types` namespace. It is used to store the details of an access token,
     * which typically includes properties such as the token value, expiry time, and possibly
     * other metadata related to authentication and authorization.
     */
    protected _access_token_data?: Types.AccessTokenData;
    /**
     * Represents the unique identifier of the parent log entry.
     * This variable is optional, meaning it might be undefined.
     * If present, it denotes the ID of the log entry that is the parent
     * in a hierarchical log structure, aiding in tracking relational
     * log data.
     */
    protected _parent_log_id?: string;

    /**
     * A boolean flag that indicates whether debug logging is enabled.
     * When set to true, the application will output additional debug
     * information to the logs. This can be useful for troubleshooting
     * and development purposes. Default value is false.
     */
    protected _debug_logging_enabled = false;

    /**
     * Constructs an instance of the class with a unique transaction ID, username, and password.
     *
     * @param username - The username for the instance.
     * @param password - The password for the instance.
     */
    constructor(username: string, password: string) {
        this.transaction_id = crypto.randomUUID().toUpperCase();
        this.username = username;
        this.password = password;
    }

    /**
     * Retrieves the access token data.
     *
     * @returns The access token data, or undefined if not set.
     */
    protected get access_token_data(): Types.AccessTokenData | undefined {
        return this._access_token_data;
    }

    /**
     * Retrieves the service properties.
     *
     * @returns The service properties if available, otherwise undefined.
     */
    protected get service_properties(): Types.ServiceProperties | undefined {
        return this._properties;
    }

    /**
     * Throws a VattenfallApiError with the given message.
     *
     * @param message - The error message to be included in the VattenfallApiError.
     * @returns This method does not return as it always throws an error.
     */
    protected error(message: string): never {
        throw new Errors.VattenfallServiceError({ message: message });
    }

    /**
     * Logs the provided data to the console if debug logging is enabled.
     *
     * @param data - The data to be logged.
     */
    protected debug(...data: unknown[]): void {
        if (this._debug_logging_enabled) console.log(...data);
    }

    /**
     * Enables or disables debug logging for the application.
     *
     * @param enabled - A boolean value indicating whether debug logging should be enabled.
     */
    public setDebugLogging(enabled: boolean): void {
        this._debug_logging_enabled = enabled;
    }

    /**
     * Checks the given API response and throws an error if the response status is not "OK".
     *
     * @param response - The API response to check for an error status.
     * @returns Returns nothing if the response is "OK"; otherwise, throws a VattenfallApiError.
     */
    public raiseOnErrorResponse(response: Types.Response): void | never {
        if (response?.StatusCode !== "OK")
            throw new Errors.VattenfallServiceError({
                status_code: response.StatusCode,
                ...(response.Meldungen.length > 0 ? { data: response.Meldungen[0] } : {}),
            });
    }

    /**
     * Fetches and returns the service properties.
     * If the service properties have been previously fetched and stored, it returns the stored properties.
     * Otherwise, it fetches the properties from a predefined URL, stores them, and then returns them.
     * In case of an error during fetching, it logs the error message.
     *
     * @returns A promise that resolves to the service properties.
     */
    public async getServiceProperties(): Promise<Types.ServiceProperties> {
        if (!this._properties) {
            this._properties =
                ((await fetch(this.service_properties_uri)
                    .then((response) => response.json())
                    .catch(this.error)) as Types.ServiceProperties) ??
                this.error("Unable to retrieve service properties");
            this.debug("Service properties retrieved: ", this._properties);
        }

        return this._properties;
    }

    /**
     * Checks if the user is authenticated by verifying the presence of access token data.
     *
     * @returns Returns true if access token data exists, otherwise false.
     */
    public isAuthenticated(): boolean {
        return !!this._access_token_data;
    }

    /**
     * Checks if the current access token has expired.
     *
     * @returns True if the token is expired, otherwise false.
     */
    public isTokenExpired(): boolean {
        if (!this.isAuthenticated() || this._access_token_data?.InterneZeit === undefined) return true;

        const expiry_date = new Date(this._access_token_data.InterneZeit);
        const now = new Date();
        const buffered_ttl_ms = (this.access_token_ttl_seconds - 60) * 1000; // buffer 1 minute

        return expiry_date.getTime() + buffered_ttl_ms <= now.getTime();
    }

    /**
     * Makes an HTTP request to the specified URI with the given method and data. This is an internal method that
     * returns a {Response} object.
     *
     * @param uri - The endpoint URI to which the request is made.
     * @param method - The HTTP method to be used for the request (e.g., GET, POST).
     * @param data - The data to be sent with the request, if applicable.
     * @returns A promise that resolves to the response of the request.
     */
    protected async _request<D extends Types.RequestData>(
        uri: string,
        method: Types.HTTPMethod = Types.HTTPMethod.GET,
        data?: D,
    ): Promise<Response> {
        const properties = await this.getServiceProperties();
        const full_uri = uri.startsWith("/") ? `${properties.DI_HOST}/${this.api_version}${uri}` : uri;

        const is_login = data?.Username !== undefined && data?.Passwort !== undefined;
        const is_refresh_token = data?.RefreshToken !== undefined;
        const requires_authentication = !(is_login || is_refresh_token);

        const options: RequestInit = {
            method: method,
            headers: {
                "Ocp-Apim-Subscription-Key": properties.DI_SUBSCRIPTION_KEY,
                "Content-Type": "application/json",
                ...(requires_authentication ? { "davis-token": await this.getAccessToken() } : {}),
            },
        };

        if (data && (method === Types.HTTPMethod.POST || method === Types.HTTPMethod.PUT)) {
            options.body = JSON.stringify({
                TransaktionsId: this.transaction_id,
                Client: this.api_client,
                Mandant: this.api_tenant,
                ...(this._parent_log_id ? { ParentLogId: this._parent_log_id } : {}),
                Request: data,
            });
        }

        this.debug(method, full_uri, options);

        return fetch(full_uri, options).catch(this.error);
    }

    /**
     * Processes the HTTP response and returns it in the specified format.
     *
     * @param {Response} response - The HTTP response to process.
     * @return {Promise<R>} The processed response in the specified format.
     */
    protected async _processResponse<R extends Types.Response>(response: Response): Promise<R> {
        if (response.body == null) return {} as R;

        const response_json = (await response.json().catch(() => {})) as R;

        if (this._debug_logging_enabled) this.debug(JSON.stringify(response_json, null, 2));

        this.raiseOnErrorResponse(response_json);

        if (response_json?.ParentLogId !== undefined) this._parent_log_id = response_json.ParentLogId;

        return response_json;
    }

    /**
     * Makes an HTTP request to the specified URI with the provided method and data,
     * and returns a promise that resolves to the response.
     *
     * @param uri - The URI to send the request to.
     * @param method - The HTTP method to use for the request. Defaults to GET.
     * @param data - The data to send with the request. Optional.
     * @returns A promise that resolves to the response of the HTTP request.
     */
    protected async request<R extends Types.Response, D extends Types.RequestData>(
        uri: string,
        method: Types.HTTPMethod = Types.HTTPMethod.GET,
        data?: D,
    ): Promise<R> {
        const response = await this._request(uri, method, data);
        return this._processResponse(response);
    }

    /**
     * Makes an HTTP GET request to the given URI and returns the response.
     *
     * @param uri - The URI to send the GET request to.
     * @returns A promise that resolves to the API response.
     */
    public async get<R extends Types.Response>(uri: string): Promise<R> {
        return this.request(uri, Types.HTTPMethod.GET);
    }

    /**
     * Sends an HTTP POST request to the specified URI with the given request data and returns the response.
     *
     * @param uri - The URI to send the POST request to.
     * @param data - The data to be sent with the POST request.
     * @returns {Promise<R>} - A promise that resolves to the response data.
     */
    public async post<R extends Types.Response, D extends Types.RequestData>(uri: string, data: D): Promise<R> {
        return this.request(uri, Types.HTTPMethod.POST, data);
    }

    /**
     * Sends an HTTP PUT request to the specified URI with the given data.
     *
     * @param uri - The URI to which the PUT request is sent.
     * @param data - The data to be sent in the body of the PUT request.
     * @returns A promise that resolves to the response of the PUT request.
     */
    public async put<R extends Types.Response, D extends Types.RequestData>(uri: string, data: D): Promise<R> {
        return this.request(uri, Types.HTTPMethod.PUT, data);
    }

    /**
     * Deletes a resource at the specified URI.
     *
     * @param uri - The URI of the resource to be deleted.
     * @returns A promise resolving to the API response.
     */
    public async delete<R extends Types.Response>(uri: string): Promise<R> {
        return this.request(uri, Types.HTTPMethod.DELETE);
    }

    /**
     * Refreshes the access token using the refresh token.
     *
     * This method checks if the current access token data is available.
     * If not, it triggers a fresh retrieval of the access token. Otherwise,
     * it attempts to refresh the current access token using the refresh token.
     * In case of any error that indicates token expiry, it retrieves a new
     * access token.
     *
     * @returns A promise that resolves once the access token is refreshed or a new one is retrieved.
     */
    public async refreshAccessToken(): Promise<void> {
        if (!this.isAuthenticated() || this._access_token_data?.RefreshToken === undefined) {
            await this.getAccessToken(true);
            return;
        }

        try {
            this._access_token_data = (
                await this.post<Types.TokenResponse, Types.GetTokenRefreshRequestData>("/Account/GetTokenRefresh", {
                    RefreshToken: this._access_token_data.RefreshToken,
                })
            ).Result;
        } catch (error) {
            if (error instanceof Errors.VattenfallServiceError && error.isTokenExpiryError())
                await this.getAccessToken(true);
            throw error;
        }
    }

    /**
     * Retrieves an access token for the user. If the current access token is expired
     * and the `force` parameter is set to `false`, it refreshes the access token.
     *
     * @param force - Whether to forcefully obtain a new access token even if the current one is not expired.
     * @returns A promise that resolves to the access token string.
     */
    public async getAccessToken(force: boolean = false): Promise<string> {
        const refresh = this.isAuthenticated() && this.isTokenExpired();

        if (refresh && !force) {
            this.debug("Existing session is expired, refreshing access token...");
            await this.refreshAccessToken();
            return this._access_token_data?.AccessToken ?? this.error("Failed to retrieve access token");
        }

        if (!this.isAuthenticated()) {
            const response = await this.post<Types.TokenResponse, Types.GetTokenUserRequestData>(
                "/Account/GetTokenUser",
                {
                    Tenant: this.api_client,
                    Username: this.username,
                    Passwort: this.password,
                    Werte: {
                        TwoStepAuth: "true",
                        CheckOnlyBenutzerId: "false",
                        NEUE_NUTZUNGSBEDINGUNGEN_BESTAETIGT: "false",
                    },
                },
            );
            this._access_token_data = response.Result;
            this.debug("New access token retrieved: ", this._access_token_data);
        }

        if (this._access_token_data?.AccessToken === undefined) this.error("Access token cannot be accessed");
        return this._access_token_data.AccessToken;
    }

    /**
     * Logs the user out by invalidating the current access token.
     *
     * This method checks if the user is authenticated before attempting to log out. If authenticated,
     * it sends a request to the server to delete the current token. If the server response indicates
     * a token expiry error, the error is not thrown. Otherwise, any other errors encountered during
     * the logout process are thrown.
     *
     * @returns A promise that resolves when the logout operation is complete.
     */
    public async logOut(): Promise<void> {
        if (!this.isAuthenticated()) return;
        try {
            await this.post<Types.TokenDeleteResponse, Types.RequestData>("/Account/DeleteToken", {});
        } catch (error) {
            if (!(error instanceof Errors.VattenfallServiceError && error.isTokenExpiryError())) {
                // only throw this error if it is not a token expired error
                throw error;
            }
        }
        this._access_token_data = undefined;
    }

    /**
     * Fetches the account information from the server.
     *
     * @returns A promise that resolves to the account information.
     */
    public async getAccount(): Promise<Types.Account> {
        return this.post<Types.Account, Types.AccountRequestData>("/Account/GetAccount", {
            Tenant: this.api_client,
            Username: this.username,
        });
    }

    /**
     * Fetches the list of contracts for the user.
     *
     * @returns A promise that resolves to the contract data.
     */
    public async getContractList(): Promise<Types.ContractResponse> {
        return this.post<Types.ContractResponse, Types.ContractListRequestData>("/Vertrag/GetVertragsliste", {
            Username: this.username,
            Werte: {
                // if set to false DokumentenVersandArt field will return null
                DOKUMENTENVERSANDART: true,
            },
        });
    }

    /**
     * Retrieves contract data based on the provided contract ID.
     *
     * @param contract_id - The ID of the contract to retrieve.
     * @returns A promise that resolves with the contract data.
     */
    public async getContract(contract_id: string): Promise<Types.ContractResponse> {
        return this.post<Types.ContractResponse, Types.MultiContractRequestData>("/Vertrag/GetVertraege", {
            VK: [contract_id],
        });
    }

    /**
     * Fetches the meter readings for a given contract ID.
     *
     * @param contract_id - The ID of the contract for which meter readings are being requested.
     * @returns A promise that resolves to the meter reading response.
     */
    public async getMeterReadings(contract_id: string): Promise<Types.MeterReadingResponse> {
        return this.post<Types.MeterReadingResponse, Types.ContractRequestData>("/Zaehlerstand/GetZaehlerstaende", {
            VK: contract_id,
        });
    }
}
