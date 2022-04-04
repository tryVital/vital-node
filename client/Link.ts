import { AxiosInstance } from 'axios';
import {
  ProviderLinkResponse,
  LinkTokenExchangeResponse,
  PasswordProviders,
  OAuthProviders,
  EmailProviders,
} from './models/link_models';
import { SourceWithLinkInfo } from './models/user_models';

export class LinkApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async create(
    userId: string,
    provider: string = null,
    redirect_url: string = null
  ): Promise<LinkTokenExchangeResponse> {
    const resp = await this.client.post(this.baseURL.concat('/link/token/'), {
      user_key: userId,
      provider,
      redirect_url,
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
      this.baseURL.concat(`/link/provider/${provider}`),
      {
        username,
        password,
      },
      { headers: { LinkToken: linkToken } }
    );
    return resp.data;
  }

  public async connectEmailProvider(
    linkToken: string,
    provider: EmailProviders,
    email: string
  ): Promise<ProviderLinkResponse> {
    const resp = await this.client.post(
      this.baseURL.concat(`/link/provider/email/${provider}`),
      {
        email,
      },
      { headers: { LinkToken: linkToken } }
    );
    return resp.data;
  }

  public async getOAuthLink(
    linkToken: string,
    provider: OAuthProviders
  ): Promise<SourceWithLinkInfo> {
    const resp = await this.client.get(
      this.baseURL.concat(`/link/provider/oauth/${provider}`),
      { headers: { LinkToken: linkToken } }
    );
    return resp.data;
  }
}
