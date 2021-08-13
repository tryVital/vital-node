import { AxiosInstance } from 'axios';
import { ClientBodyResponse } from './models/body_model';

export class BodyApi {
  baseURL: string;
  client: AxiosInstance;

  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async get(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<ClientBodyResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/body/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
