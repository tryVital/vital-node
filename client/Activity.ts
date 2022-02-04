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
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<ClientActivityResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/activity/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async get_raw(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<ClientActivityRawResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/activity/${userKey}/raw`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
