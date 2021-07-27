import { AxiosInstance } from "axios";
import {
  ProviderLinkResponse,
  LinkTokenExchangeResponse,
  PasswordProviders,
} from "./models/link_models";

export class LinkApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async create(
    userKey: string,
    provider: string = null
  ): Promise<LinkTokenExchangeResponse> {
    const resp = await this.client.post(this.baseURL + "/link/token/", {
      user_key: userKey,
      provider: provider,
    });
    return resp.data;
  }

  public async connectProvider(
    linkToken: string,
    provider: PasswordProviders,
    username: string,
    password: string
  ): Promise<ProviderLinkResponse> {
    const resp = await this.client.post(
      this.baseURL + `/link/provider/${provider}`,
      {
        username: username,
        password: password,
      },
      { headers: { LinkToken: linkToken } }
    );
    return resp.data;
  }
}
