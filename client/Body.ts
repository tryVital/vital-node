import { AxiosInstance } from 'axios';
import { ClientBodyResponse } from './models/body_model';
import { ClientBodyRawResponse } from './models/raw_response';

export class BodyApi {
  baseURL: string;
  client: AxiosInstance;

  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async get(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<ClientBodyResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/body/${userId}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async get_raw(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<ClientBodyRawResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/body/${userId}/raw`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
