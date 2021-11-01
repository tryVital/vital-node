import { AccessToken, ClientConfig } from './models';
import CONFIG from './config';

const AuthenticationClient = require('auth0').AuthenticationClient; // eslint-disable-line

export class ClientCredentials {
  config: ClientConfig;
  private accessToken: AccessToken;
  constructor(config: ClientConfig) {
    this.config = config;
  }

  public getAccessToken = async (): Promise<AccessToken> => {
    const auth0 = new AuthenticationClient({
      domain: CONFIG.domains[this.config.environment],
      clientId: this.config.client_id,
      clientSecret: this.config.client_secret,
    });
    const resp = await auth0.clientCredentialsGrant({
      audience: CONFIG.audiences[this.config.environment],
    });
    return {
      token: resp.access_token,
      exp: +new Date() + resp.expires_in - 20,
    };
  };

  access_token: () => Promise<string> = async () => {
    const currentTime = +new Date();
    if (!this.accessToken || currentTime >= this.accessToken.exp) {
      this.accessToken = await this.getAccessToken();
      return this.accessToken.token;
    }
    return this.accessToken.token;
  };
}
