import { AxiosInstance } from 'axios';
import { ClientFacingProfile } from './models/profile_model';

export class ProfileApi {
  baseURL: string;
  client: AxiosInstance;

  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async get(
    userKey: string,
    provider?: string
  ): Promise<ClientFacingProfile> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/profile/${userKey}`),
      {
        params: { provider },
      }
    );
    return resp.data;
  }
}
