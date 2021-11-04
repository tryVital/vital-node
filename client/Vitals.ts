import { AxiosInstance } from 'axios';
import {
  ClientCholesterolResponse,
  ClientGlucoseResponse,
} from './models/activity';

export class VitalsApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async cholesterol(
    type: 'ldl' | 'total_cholesterol' | 'triglycerides' | 'hdl',
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<ClientCholesterolResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/vitals/cholesterol/${type}/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async glucose(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<ClientGlucoseResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/vitals/glucose/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }
}
