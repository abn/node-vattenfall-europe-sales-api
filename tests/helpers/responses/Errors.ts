import * as Types from "../../../src/types";

export const mockTokenExpiredErrorResponse: Types.ErrorResponse = {
    ParentLogId: "parent-log-id",
    LogId: "log-id",
    StatusCode: "ACCESS_DENIED",
    Meldungen: [
        {
            Code: "ERROR_TOKEN_EXPIRED",
            TechnischeBeschreibung: "",
            FachlicheBeschreibung: "",
        },
    ],
    Result: null,
};

export const mockTermsOfUseUnacceptedErrorResponse: Types.ErrorResponse = {
    ParentLogId: "parent-log-id",
    LogId: "log-id",
    StatusCode: "USER_ERROR",
    Meldungen: [
        {
            Code: "ERROR_NUTZUNGSBEDINGUNGEN_BESTAETIGUNG_ERFORDERLICH",
            TechnischeBeschreibung: "Nutzungsbedingung muss bestätigt werden. Bei Abbruch Token invalidieren.",
            FachlicheBeschreibung:
                "Es liegen neue Nutzungsbedingungen vor. Um fortzufahren müssen Sie diese bestätigen.",
        },
    ],
    Result: null,
};
