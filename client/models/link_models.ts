export type PasswordProviders = 'whoop' | 'renpho' | 'peloton' | 'zwift' | 'hammerhead';
export type OAuthProviders =
  | 'oura'
  | 'fitbit'
  | 'garmin'
  | 'whoop'
  | 'strava'
  | 'wahoo';

export type EmailProviders = 'freestyle_libre';
export type DemoProviders = 'apple_health_kit' | 'fitbit' | 'oura' | 'whoop';

export interface ProviderLinkResponse {
  provider: PasswordProviders;
  connected: boolean;
  provider_id?: string;
}

export interface LinkTokenExchangeResponse {
  link_token: string;
}

export interface DemoConnectionResponse {
  success: boolean;
  redirect_url?: string;
}
