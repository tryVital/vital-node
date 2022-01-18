export type PasswordProviders = 'whoop' | 'renpho' | 'peloton' | 'zwift';
export type OAuthProviders =
  | 'oura'
  | 'fitbit'
  | 'garmin'
  | 'whoop'
  | 'strava'
  | 'wahoo';

export interface ProviderLinkResponse {
  provider: PasswordProviders;
  connected: boolean;
  provider_id?: string;
}

export interface LinkTokenExchangeResponse {
  link_token: string;
}
