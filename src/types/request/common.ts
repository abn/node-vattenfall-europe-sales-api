export type RequestData = Record<string, unknown>;

export interface AccountRequestData extends RequestData {
    Tenant: string;
    Username: string;
}
