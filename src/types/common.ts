export type BooleanString = "true" | "false";

export type AccessTokenData = {
    AccessToken: string;
    RefreshToken: string;
    Username: string | null; // null when refreshing token
    InterneZeit: string; // ISO 8601 Format timestamp
};

export type ServiceProperties = {
    DI_HOST: string;
    DI_SUBSCRIPTION_KEY: string;
    // The following properties are available but not required
    // FRIENDLY_CAPTCHA_SITEKEY: string;
    // AI_INSTRUMENTATION_KEY: string;
    // AI_CONNECTION_STRING: string;
    // AI_ENABLED: boolean;
    // TRACK_ENABLED: boolean;
    // TRACK_ACCOUNTS: string[];
    // CSP_META: string;
    // MOVE_IN_OPEN_CAMPAIGN_CODE: string;
    // MOVE_IN_CLOSED_CAMPAIGN_CODE: string;
    // TARIFF_CHANGE_CAMPAIGN_CODE: string;
    // MOVE_CAMPAIGN_CODE: string;
    // CONTACT_FORM_PROCESS_SIGN: string;
};
