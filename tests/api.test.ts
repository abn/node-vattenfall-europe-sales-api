import { afterEach, beforeEach, describe, expect, it } from "@jest/globals";
import fetchMock from "fetch-mock";

import VattenfallEuropeSales from "../src";
import * as Errors from "../src/errors";
import * as Types from "../src/types";
import { Config, Responses, Util } from "./helpers";

fetchMock.mockGlobal();

describe("VattenfallEuropeSales", () => {
    let service: VattenfallEuropeSales;
    let get_token_path_filter: string;

    beforeEach(() => {
        fetchMock.clearHistory().removeRoutes();

        service = new VattenfallEuropeSales(Config.TEST_USERNAME, Config.TEST_PASSWORD);
        service.setDebugLogging(false);

        fetchMock.get(service.service_properties_uri, Responses.mockServicePropertiesResponse, {
            name: "service_properties",
        });

        get_token_path_filter = Util.mockFetchRoute(
            service,
            "/Account/GetTokenUser",
            () => {
                return Responses.mockTokenUserResponse;
            },
            false,
            "get_access_token",
        );
    });

    afterEach(() => {
        fetchMock.clearHistory().removeRoutes();
    });

    it("should be created", () => {
        expect(service).toBeInstanceOf(VattenfallEuropeSales);
    });

    it("should fetch service properties", async () => {
        const properties = await service.getServiceProperties();
        expect(properties).toEqual(Responses.mockServicePropertiesResponse);
    });

    it("should throw error if unable to fetch service properties", async () => {
        fetchMock.removeRoutes({ names: ["service_properties"] });
        fetchMock.get(service.service_properties_uri, () => {
            throw new Error("Network error");
        });
        await expect(service.getServiceProperties()).rejects.toThrow(Errors.VattenfallServiceError);
        expect(fetchMock.callHistory.calls(service.service_properties_uri).length).toEqual(1);
    });

    it("should get access token", async () => {
        const mockTokenResponse = Responses.mockTokenUserResponse;
        const accessToken = await service.getAccessToken();
        expect(accessToken).toEqual(mockTokenResponse.Result.AccessToken);
    });

    it("should not refresh access token", async () => {
        expect(service.isAuthenticated()).toEqual(false);
        await service.getAccessToken(true);
        expect(service.isAuthenticated()).toEqual(true);

        const get_token_refresh_path_filter = `path: /${service.api_version}/Account/GetTokenRefresh`;

        expect(fetchMock.callHistory.calls(get_token_path_filter).length).toEqual(1);
        expect(fetchMock.callHistory.calls(get_token_refresh_path_filter).length).toEqual(0);

        expect(service.isTokenExpired()).toEqual(false);
        await service.getAccessToken();

        expect(fetchMock.callHistory.calls(get_token_path_filter).length).toEqual(1);
        expect(fetchMock.callHistory.calls(get_token_refresh_path_filter).length).toEqual(0);
    });

    it("should refresh access token on expiry", async () => {
        const mockTokenResponse = Responses.getMockTokenResponse({
            create_time: new Date(Date.now() - service.access_token_ttl_seconds * 1000),
        });
        const mockRefreshTokenResponse = Responses.mockRefreshTokenResponse;

        expect(service.isAuthenticated()).toEqual(false);

        fetchMock.removeRoutes({ names: ["get_access_token"] });
        get_token_path_filter = Util.mockFetchRoute(
            service,
            "/Account/GetTokenUser",
            mockTokenResponse,
            false,
            "get_access_token",
        );

        await service.getAccessToken();
        expect(service.isTokenExpired()).toEqual(true);

        const get_token_refresh_path_filter = Util.mockFetchRoute(
            service,
            "/Account/GetTokenRefresh",
            mockRefreshTokenResponse,
        );

        await service.getAccessToken();

        expect(fetchMock.callHistory.calls(get_token_path_filter).length).toEqual(1);
        expect(fetchMock.callHistory.calls(get_token_refresh_path_filter).length).toEqual(1);

        expect(service.isTokenExpired()).toEqual(false);
        expect(service.isAuthenticated()).toEqual(true);
    });

    it("should refresh access token on explicit call", async () => {
        expect(service.isAuthenticated()).toEqual(false);
        await service.getAccessToken(true);
        expect(service.isAuthenticated()).toEqual(true);

        const get_token_refresh_path_filter = Util.mockFetchRoute(
            service,
            "/Account/GetTokenRefresh",
            Responses.mockRefreshTokenResponse,
        );

        await service.refreshAccessToken();
        expect(fetchMock.callHistory.calls(get_token_path_filter).length).toEqual(1);
        expect(fetchMock.callHistory.calls(get_token_refresh_path_filter).length).toEqual(1);
    });

    it("should throw error if unable to get access token", async () => {
        const path = Util.mockFetchRoute(
            service,
            "/Account/GetTokenUser",
            () => {
                throw new Error("Network error");
            },
            true,
            "get_access_token",
        );

        await expect(service.getAccessToken()).rejects.toThrow(Errors.VattenfallServiceError);
        expect(fetchMock.callHistory.calls(path).length).toEqual(1);
    });

    it("should get account information", async () => {
        const path = Util.mockFetchRoute(service, "/Account/GetAccount", Responses.mockAccountResponse, true);
        const account = await service.getAccount();

        expect(account).toEqual(Responses.mockAccountResponse);

        const body = Util.extractRequestData<Types.AccountRequestData>(path);
        expect(body).toEqual({ Tenant: "KSO", Username: "test-username" });
    });

    it("should get contract list", async () => {
        Util.mockFetchRoute(service, "/Vertrag/GetVertragsliste", Responses.mockContractListResponse, true);
        const contracts = await service.getContractList();
        expect(contracts).toEqual(Responses.mockContractListResponse);
    });

    it("should get single contract", async () => {
        Util.mockFetchRoute(service, "/Vertrag/GetVertraege", Responses.mockContractResponse, true);
        const contracts = await service.getContract("test-contract-id");
        expect(contracts).toEqual(Responses.mockContractResponse);
    });

    it("should get meter readings", async () => {
        Util.mockFetchRoute(service, "/Zaehlerstand/GetZaehlerstaende", Responses.mockMeterReadingsResponse, true);
        const meterReadings = await service.getMeterReadings("test-contract-id");
        expect(meterReadings).toEqual(Responses.mockMeterReadingsResponse);
    });

    it("should log out", async () => {
        Util.mockFetchRoute(service, "/Account/DeleteToken", Responses.mockDeleteTokenResponse, true);
        await service.getAccessToken();
        await service.logOut();
        expect(service.isAuthenticated()).toBeFalsy();
    });

    it("should throw error if logout fails due to non token expiry error", async () => {
        const filter = Util.mockFetchRoute(
            service,
            "/Account/DeleteToken",
            () => {
                throw new Error("Network error");
            },
            true,
        );

        await service.getAccessToken();
        await expect(service.logOut()).rejects.toThrow(Error);
        expect(fetchMock.callHistory.calls(filter).length).toEqual(1);
    });
});
