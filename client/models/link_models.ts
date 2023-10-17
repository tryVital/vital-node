export type PasswordProviders =
  | 'whoop'
  | 'renpho'
  | 'peloton'
  | 'zwift'
  | 'hammerhead'
  | 'eight_sleep'
  | 'beurer_api'
  | 'dexcom'
  | 'my_fitness_pal';

export type OAuthProviders =
  | 'oura'
  | 'fitbit'
  | 'garmin'
  | 'strava'
  | 'wahoo'
  | 'ihealth'
  | 'withings'
  | 'google_fit'
  | 'dexcom_v3'
  | 'polar'
  | 'cronometer';

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

export interface VitalCodeCreatedResponse {
  code: string;
  exchange_url: string;
}
