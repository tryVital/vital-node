import { AxiosInstance } from 'axios';
import { ClientActivityResponse } from './models/activity';
import { ClientActivityRawResponse } from './models/raw_response';

export class ActivityApi {
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
  ): Promise<ClientActivityResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/activity/${userId}`),
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
  ): Promise<ClientActivityRawResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/activity/${userId}/raw`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
