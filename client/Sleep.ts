import { AxiosInstance } from 'axios';
import {
  ClientSleepResponse,
  ClientSleepStreamResponse,
} from './models/sleep_models';
import { ClientSleepRawResponse } from './models/raw_response';

export class SleepApi {
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
    provider?: string,
    with_stream: boolean = false
  ): Promise<ClientSleepResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/sleep/${userId}`),
      {
        params: { start_date: startDate, end_date: endDate, provider, with_stream },
      }
    );
    return resp.data;
  }

  public async getSleepWithStream(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<ClientSleepResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/sleep/${userId}/stream`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async getStream(sleepId: string): Promise<ClientSleepStreamResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/timeseries/sleep/${sleepId}/stream`)
    );
    return resp.data;
  }

  public async get_raw(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<ClientSleepRawResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/sleep/${userId}/raw`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
