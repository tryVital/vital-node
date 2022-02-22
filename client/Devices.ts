import { AxiosInstance } from 'axios';
import { ClientDevicesRawResponse } from './models/raw_response';

export class DevicesAPI {
  baseURL: string;
  client: AxiosInstance;

  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async get_raw(
    userId: string,
    provider?: string
  ): Promise<ClientDevicesRawResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/summary/devices/${userId}/raw`),
      {
        params: { provider },
      }
    );
    return resp.data;
  }
}
