import { AxiosInstance } from 'axios';
import {
  ProviderLinkResponse,
  LinkTokenExchangeResponse,
  DemoConnectionResponse,
  PasswordProviders,
  OAuthProviders,
  EmailProviders,
  DemoProviders,
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
    redirect_url: string = null,
    filter_on_providers: string[] = null
  ): Promise<LinkTokenExchangeResponse> {
    const default_params = {
      user_key: userId,
      provider,
      redirect_url,
    };
    if (filter_on_providers) {
      // @ts-ignore
      default_params['filter_on_providers'] = filter_on_providers;
    }
    const resp = await this.client.post(
      this.baseURL.concat('/link/token/'),
      default_params
    );
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
    email: string,
    region?: string
  ): Promise<ProviderLinkResponse> {
    const payload = region ? { email, region } : { email };
    const resp = await this.client.post(
      this.baseURL.concat(`/link/provider/email/${provider}`),
      payload,
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

  public async connectDemoProvider(userId: string, provider: DemoProviders): Promise<DemoConnectionResponse> {
    const resp = await this.client.post(
      this.baseURL.concat(`/link/connect/demo`),
      { user_id: userId, provider: provider },
    );
    return resp.data;
  }
}
