import { AccessToken, ClientConfig } from ".";
import CONFIG from "./config";

const AuthenticationClient = require("auth0").AuthenticationClient;

export class ClientCredentials {
  config: ClientConfig;
  private _access_token: AccessToken;
  constructor(config: ClientConfig) {
    this.config = config;
  }

  public getAccessToken = async () => {
    var auth0 = new AuthenticationClient({
      domain: CONFIG.domains[this.config.environment],
      clientId: this.config.client_id,
      clientSecret: this.config.client_secret,
    });
    const resp = await auth0.clientCredentialsGrant({
      audience: CONFIG.audiences[this.config.environment],
    });
    return { token: resp.access_token, exp: resp.exp };
  };

  access_token: () => Promise<string> = async () => {
    const currentTime = +new Date();
    if (!this._access_token || currentTime > this._access_token.exp) {
      this._access_token = await this.getAccessToken();
      return this._access_token.token;
    }
    return this._access_token.token;
  };
}