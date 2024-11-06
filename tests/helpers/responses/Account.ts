import * as Types from "../../../src/types";
import { TEST_USERNAME } from "../config";

export const mockAccountResponse: Types.Account = {
    ParentLogId: "parent-log-id",
    LogId: "log-id",
    StatusCode: "OK",
    Meldungen: [],
    Result: {
        AccountId: "test-account-id",
        Tenant: "test-tenant",
        Username: TEST_USERNAME,
        Konfiguration: {},
        Nachname: "Test",
        Vorname: "User",
        Emailadresse: "test@example.com",
        Mobilnummer: null,
        Accountdaten: {
            KSO_TRACKING_ID_HISTORISCH: null,
            ANREDE: "Herr",
            ERSTELLT: "2024-01-01T00:00:00.000Z",
        },
        Gruppen: [],
        Berechtigungen: [],
        Kampagnen: [],
        ZugeordneteObjekte: {},
        Status: {
            Code: "AKTIV",
            Anzeigetext: "AKTIV",
        },
    },
};
