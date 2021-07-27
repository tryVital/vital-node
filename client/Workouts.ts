import { AxiosInstance } from "axios";
import { ClientWorkoutResponse } from "./models/workout_models";

export class WorkoutsApi {
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
  ): Promise<ClientWorkoutResponse> {
    const resp = await this.client.get(this.baseURL + `/workouts/${userKey}`, {
      params: { start_date: startDate, end_date: endDate, provider },
    });
    return resp.data;
  }
}