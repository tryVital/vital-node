import { AxiosInstance } from 'axios';
import { ClientProviderSpecificResponse } from './models/provider_specific';

export class ProviderSpecificApi {
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
    provider: string,
    dataType?: 'activity' | 'sleep' | 'body' | 'workouts'
  ): Promise<ClientProviderSpecificResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/provider-specific/${userKey}/${provider}`),
      {
        params: {
          start_date: startDate,
          end_date: endDate,
          data_type: dataType,
        },
      }
    );
    return resp.data;
  }
}
