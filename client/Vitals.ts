import { AxiosInstance } from 'axios';
import {
  ClientCholesterolResponse,
  ClientGlucoseResponse,
  ClientHba1cResponse,
  ClientIgeResponse,
  ClientIggResponse,
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

  public async hba1c(
    userKey: string,
    startDate: Date,
    endDate: Date,
    provider?: string
  ): Promise<ClientHba1cResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/vitals/hba1c/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate, provider },
      }
    );
    return resp.data;
  }

  public async ige(
    userKey: string,
    startDate: Date,
    endDate: Date
  ): Promise<ClientIgeResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/vitals/ige/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate },
      }
    );
    return resp.data;
  }

  public async igg(
    userKey: string,
    startDate: Date,
    endDate: Date
  ): Promise<ClientIggResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/vitals/igg/${userKey}`),
      {
        params: { start_date: startDate, end_date: endDate },
      }
    );
    return resp.data;
  }
}
