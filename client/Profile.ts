import { AxiosInstance } from 'axios';
import { ClientFacingProfile, } from './models/profile_model';
import { ClientProfileRawResponse } from './models/raw_response';

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

  public async get_raw(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<ClientProfileRawResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/profile/${userKey}/raw`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
