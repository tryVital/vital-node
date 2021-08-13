import { AxiosInstance } from 'axios';
import { ClientActivityResponse } from './models/activity';

export class ActivityApi {
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
  ): Promise<ClientActivityResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/activity/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
