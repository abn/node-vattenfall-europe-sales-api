import { AccessTokenData } from "../common";
import { ErrorReport, Response } from "./common";

export interface TokenResponse extends Response {
    Result: AccessTokenData;
}

export interface TokenDeleteResponse extends Response {
    Meldungen: ErrorReport[] &
        [
            {
                Code: "REMARK_TOKEN_INVALIDIERT";
                TechnischeBeschreibung: "Der Token wurde in den Status 'ungültig' versetzt.";
                FachlicheBeschreibung: "Der Token wurde in den Status 'ungültig' versetzt.";
            },
        ];
    Result: null;
}
