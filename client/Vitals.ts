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
    endDate?: Date,
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
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      `cholesterol/${type}`,
      startDate,
      endDate,
      provider
    );
  }

  public async glucose(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'glucose',
      startDate,
      endDate,
      provider
    );
  }

  public async ige(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(userId, 'ige', startDate, endDate, provider);
  }

  public async igg(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(userId, 'igg', startDate, endDate, provider);
  }

  public async heartrate(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'heartrate',
      startDate,
      endDate,
      provider
    );
  }
}
