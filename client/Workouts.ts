import { AxiosInstance } from 'axios';
import { ClientWorkoutsRawResponse } from './models/raw_response';
import {
  ClientWorkoutResponse,
  ClientWorkoutStreamResponse,
} from './models/workout_models';

export class WorkoutsApi {
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
  ): Promise<ClientWorkoutResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/workouts/${userId}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async getStream(
    workoutId: string
  ): Promise<ClientWorkoutStreamResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/timeseries/workouts/${workoutId}/stream`)
    );
    return resp.data;
  }

  public async get_raw(
    userId: string,
    startDate: Date,
    endDate?: Date,
    provider?: string
  ): Promise<ClientWorkoutsRawResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/workouts/${userId}/raw`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
