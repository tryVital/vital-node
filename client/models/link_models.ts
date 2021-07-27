
export type PasswordProviders = "whoop" | "renpho" | "peloton" | "zwift";

export interface ProviderLinkResponse {
    provider: PasswordProviders;
    connected: boolean;
}

export interface LinkTokenExchangeResponse {
    link_token: string;
}
