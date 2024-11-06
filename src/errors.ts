import { ErrorReport, StatusCode } from "./types";

/**
 * Represents options for handling errors in the Vattenfall service.
 */
export interface VattenfallServiceErrorOptions {
    message?: string;
    status_code?: StatusCode;
    data?: ErrorReport;
}

/**
 * Class representing an error from the Vattenfall service.
 * Extends the native `Error` class and adds additional properties and methods
 * to handle specific error scenarios related to the Vattenfall service.
 */
export class VattenfallServiceError extends Error {
    /**
     * Holds the {@link ErrorReport} returned by the server.
     */
    public readonly data?: ErrorReport;

    /**
     * Represents the {@link StatusCode} provided by the server.
     */
    public readonly status_code?: StatusCode;

    /**
     * Creates an instance of VattenfallServiceError.
     */
    constructor({ status_code, message, data }: VattenfallServiceErrorOptions) {
        super(message);
        this.data = data;
        this.status_code = status_code;
    }

    /**
     * Checks if the current error instance is due to a token expiration.
     *
     * This method verifies if the error is associated with an access
     * denial caused by an expired token. It does this by checking if
     * the `status_code` is "ACCESS_DENIED" and if the `Code` attribute
     * within the `data` object is "ERROR_TOKEN_EXPIRED".
     *
     * @returns True if the error is due to an expired token, false otherwise.
     */
    public isTokenExpiryError(): boolean {
        return this.status_code === "ACCESS_DENIED" && this.data?.Code === "ERROR_TOKEN_EXPIRED";
    }

    /**
     * Checks if the current error status code indicates a user error.
     *
     * @returns True if the status code is "USER_ERROR", otherwise false.
     */
    public isUserError(): boolean {
        return this.status_code === "USER_ERROR";
    }

    /**
     * Checks if the error code indicates that the terms of use have not been accepted.
     *
     * @returns True if the error code is "ERROR_NUTZUNGSBEDINGUNGEN_BESTAETIGUNG_ERFORDERLICH", otherwise false.
     */
    public isTermsOfUseNotAcceptedError(): boolean {
        return this.data?.Code === "ERROR_NUTZUNGSBEDINGUNGEN_BESTAETIGUNG_ERFORDERLICH";
    }

    /**
     * Retrieves the error code associated with the current instance.
     *
     * @returns The error code if available, otherwise undefined.
     */
    get error_code(): string | undefined {
        return this.data?.Code;
    }

    /**
     * Retrieves the technical description from the data object, if available.
     *
     * @returns The technical description or undefined if it is not present.
     */
    get technical_description(): string | undefined {
        return this.data?.TechnischeBeschreibung;
    }

    /**
     * Retrieves the user description.
     *
     * @returns The user description if available, otherwise undefined.
     */
    get user_description(): string | undefined {
        return this.data?.FachlicheBeschreibung;
    }
}
