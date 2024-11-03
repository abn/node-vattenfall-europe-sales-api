import { BooleanString } from "../common";
import { RequestData } from "./common";

export interface GetTokenUserRequestData extends RequestData {
    Tenant: string;
    Username: string;
    Passwort: string;
    Werte: {
        TwoStepAuth: BooleanString;
        CheckOnlyBenutzerId: BooleanString;
        NEUE_NUTZUNGSBEDINGUNGEN_BESTAETIGT: BooleanString;
    };
}

export interface GetTokenRefreshRequestData extends RequestData {
    RefreshToken: string;
}
