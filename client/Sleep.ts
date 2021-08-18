import { AxiosInstance } from 'axios';
import { ClientSleepResponse } from './models/sleep_models';

export class SleepApi {
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
  ): Promise<ClientSleepResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/sleep/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async getStream(sleepId: string): Promise<ClientSleepResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/sleep/${sleepId}/stream/data`)
    );
    return resp.data;
  }
}
