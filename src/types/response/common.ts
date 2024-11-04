export type StatusCode = "OK" | "USER_ERROR" | "ACCESS_DENIED" | "CLIENT_ERROR";

export type ErrorReport = {
    Code:
        | string
        | "ERROR_TOKEN_EXPIRED"
        | "ERROR_REQUEST_INVALID"
        | "ERROR_CAPTCHA_BENOETIGT"
        | "REMARK_TOKEN_INVALIDIERT"
        | "ERROR_NUTZUNGSBEDINGUNGEN_BESTAETIGUNG_ERFORDERLICH";
    TechnischeBeschreibung: string; // TechnicalDescription
    FachlicheBeschreibung: string; // UserDescription
};

export type Response = {
    ParentLogId: string;
    LogId: string;
    StatusCode: StatusCode;
    Meldungen: ErrorReport[];
    Werte?: null | Record<string, unknown>; // Values
};

export interface ErrorResponse extends Response {
    Result: null;
}

export type CodeDescription = {
    Code: null | string; // Code
    Anzeigetext: null | string; // DisplayText
};

export interface Account extends Response {
    Result: {
        AccountId: string; // AccountId
        Tenant: string; // Tenant
        Username: string; // Username
        Konfiguration: unknown; // Configuration
        Nachname: string; // LastName
        Vorname: string; // FirstName
        Emailadresse: string; // EmailAddress
        Mobilnummer: null | string; // MobileNumber
        Accountdaten: {
            KSO_TRACKING_ID_HISTORISCH: null | unknown;
            ANREDE: string; // Salutation
            ERSTELLT: string; // Created
        }; // AccountData
        Gruppen: unknown[]; // Groups
        Berechtigungen: unknown[]; // Permissions
        Kampagnen: unknown[]; // Campaigns
        ZugeordneteObjekte: unknown; // AssignedObjects
        Status:
            | CodeDescription
            | {
                  Code: "AKTIV";
                  Anzeigetext: "AKTIV";
              }; // Status
    };
}
