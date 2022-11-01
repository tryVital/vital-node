import { AxiosInstance } from 'axios';
import { ClientFacingMealResponse } from './models/meal_model';

export class MealsApi {
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
  ): Promise<ClientFacingMealResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/meal/${userId}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
