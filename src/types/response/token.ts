import { Response } from "./common";
import { AccessTokenData } from "../common";

export interface TokenResponse extends Response {
    Result: AccessTokenData;
}
