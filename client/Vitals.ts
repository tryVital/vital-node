import { AxiosInstance } from 'axios';
import { TimeseriesPoint } from './models/activity';

export class VitalsApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  private async timeseriesData(
    user_key: string,
    resource: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    const resp = await this.client.get(
      this.baseURL.concat(`/timeseries/${user_key}/${resource}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async cholesterol(
    type: 'ldl' | 'total' | 'triglycerides' | 'hdl',
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userKey,
      `cholesterol/${type}`,
      startDate,
      endDate,
      provider
    );
  }

  public async glucose(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userKey,
      'glucose',
      startDate,
      endDate,
      provider
    );
  }

  public async ige(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(userKey, 'ige', startDate, endDate, provider);
  }

  public async igg(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(userKey, 'igg', startDate, endDate, provider);
  }

  public async heartrate(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userKey,
      'heartrate',
      startDate,
      endDate,
      provider
    );
  }
}
