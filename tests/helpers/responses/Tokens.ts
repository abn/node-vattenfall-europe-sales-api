import * as Types from "../../../src/types";
import { TEST_USERNAME } from "../config";

export function getMockTokenResponse({
    is_refresh_token = false,
    create_time = null,
}: {
    is_refresh_token?: boolean;
    create_time?: Date | null;
} = {}): Types.TokenResponse {
    return {
        ParentLogId: "parent-log-id",
        LogId: "log-id",
        StatusCode: "OK",
        Meldungen: [],
        Result: {
            AccessToken: "test-access-token",
            RefreshToken: "test-refresh-token",
            Username: is_refresh_token ? null : TEST_USERNAME,
            InterneZeit: (create_time ? create_time : new Date()).toISOString(),
        },
    };
}

export const mockTokenUserResponse = getMockTokenResponse();
export const mockRefreshTokenResponse = getMockTokenResponse({ is_refresh_token: true });

export const mockDeleteTokenResponse: Types.TokenDeleteResponse = {
    ParentLogId: "parent-log-id",
    LogId: "log-id",
    StatusCode: "OK",
    Meldungen: [
        {
            Code: "REMARK_TOKEN_INVALIDIERT",
            TechnischeBeschreibung: "Der Token wurde in den Status 'ungültig' versetzt.",
            FachlicheBeschreibung: "Der Token wurde in den Status 'ungültig' versetzt.",
        },
    ],
    Result: null,
};
