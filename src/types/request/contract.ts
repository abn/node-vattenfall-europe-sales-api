import { RequestData } from "./common";

export interface MultiContractRequestData extends RequestData {
    VK: string[];
}

export interface ContractRequestData extends RequestData {
    VK: string;
}

export interface ContractListRequestData extends RequestData {
    Username: string;
    Werte: {
        DOKUMENTENVERSANDART: boolean;
    };
}
