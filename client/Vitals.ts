import { AxiosInstance } from 'axios';
import { TimeseriesBloodPressurePoint, TimeseriesPoint } from './models/activity';

export class VitalsApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  private async timeseriesData<T = TimeseriesPoint>(
    user_key: string,
    resource: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<T[]> {
    const resp = await this.client.get(
      this.baseURL.concat(`/timeseries/${user_key}/${resource}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async bloodOxygen(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string,
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'blood_oxygen',
      startDate,
      endDate,
      provider
    );
  }

  public async bloodPressure(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string,
  ): Promise<TimeseriesBloodPressurePoint[]> {
    return this.timeseriesData<TimeseriesBloodPressurePoint>(
      userId,
      'blood_pressure',
      startDate,
      endDate,
      provider
    );
  }

  public async caffeine(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'caffeine',
      startDate,
      endDate,
      provider
    );
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

  public async hrv(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'hrv',
      startDate,
      endDate,
      provider
    );
  }

  public async hypnogram(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'hypnogram',
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

  public async mindfulnessMinutes(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'mindfulness_minutes',
      startDate,
      endDate,
      provider
    );
  }

  public async respiratoryRate(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'respiratory_rate',
      startDate,
      endDate,
      provider
    );
  }

  public async steps(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'steps',
      startDate,
      endDate,
      provider
    );
  }

  public async water(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<TimeseriesPoint[]> {
    return this.timeseriesData(
      userId,
      'water',
      startDate,
      endDate,
      provider
    );
  }
}
