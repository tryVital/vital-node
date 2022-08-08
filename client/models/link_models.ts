export type PasswordProviders = 'whoop' | 'renpho' | 'peloton' | 'zwift' | 'hammerhead';
export type OAuthProviders =
  | 'oura'
  | 'fitbit'
  | 'garmin'
  | 'whoop'
  | 'strava'
  | 'wahoo';

export type EmailProviders = 'freestyle_libre';

export interface ProviderLinkResponse {
  provider: PasswordProviders;
  connected: boolean;
  provider_id?: string;
}

export interface LinkTokenExchangeResponse {
  link_token: string;
}
