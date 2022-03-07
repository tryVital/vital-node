export interface ClientConfig {
  client_id: string;
  client_secret: string;
  environment: 'prod' | 'production' | 'sandbox' | 'development';
  region?: 'us' | 'eu';
}

export interface AccessToken {
  token: string;
  exp: number;
}
