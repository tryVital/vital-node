import { AxiosInstance } from 'axios';
import { Provider } from './models/provider_models';

export class ProviderApi {
  baseURL: string;
  client: AxiosInstance;

  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async getSupportedProviders(): Promise<Provider[]> {
    const resp = await this.client.get(this.baseURL.concat('/providers/'));
    return resp.data;
  }
}
