import { AxiosInstance } from 'axios';
import {
  UserIdResponse,
  SuccessResponse,
  ClientFacingUser,
  Providers,
  ProvidersResponse,
  GetTeamUsersParams,
  GetTeamUsersResponse,
} from './models/user_models';

export class UserApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async create(clientUserId: string): Promise<UserIdResponse> {
    const resp = await this.client.post(this.baseURL.concat('/user/key'), {
      client_user_id: clientUserId,
    });
    return resp.data;
  }

  public async delete(userId: string): Promise<SuccessResponse> {
    const resp = await this.client.delete(
      this.baseURL.concat(`/user/${userId}`)
    );
    return resp.data;
  }

  public async getAll({
    limit = 100,
    offset = 0,
  }: GetTeamUsersParams = {}): Promise<GetTeamUsersResponse> {
    const url = new URL(this.baseURL.concat('/user/'));

    url.searchParams.set('limit', String(limit));
    url.searchParams.set('offset', String(offset));

    const resp = await this.client.get(url.toString());
    return resp.data;
  }

  public async get(userId: string): Promise<ClientFacingUser> {
    const resp = await this.client.get(this.baseURL.concat(`/user/${userId}`));
    return resp.data;
  }

  public async resolve(clientUserId: string): Promise<ClientFacingUser> {
    const resp = await this.client.get(
      this.baseURL.concat(`/user/key/${clientUserId}`)
    );
    return resp.data;
  }

  public async providers(userId: string): Promise<ProvidersResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/user/providers/${userId}`)
    );
    return resp.data;
  }

  public async deregisterProvider(
    userId: string,
    provider: Providers
  ): Promise<SuccessResponse> {
    const resp = await this.client.delete(
      this.baseURL.concat(`/user/${userId}/${provider}`)
    );
    return resp.data;
  }

  public async refresh(userId: string): Promise<SuccessResponse> {
    const resp = await this.client.post(
      this.baseURL.concat(`/user/refresh/${userId}`)
    );
    return resp.data;
  }
}
