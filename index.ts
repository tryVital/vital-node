import axios from 'axios';
import axiosRetry from 'axios-retry';
import {
  ActivityApi,
  BodyApi,
  LinkApi,
  ProviderSpecificApi,
  SleepApi,
  UserApi,
  WebhooksApi,
  WorkoutsApi,
} from './client';
import { ClientConfig } from './lib/models';
import CONFIG from './lib/config';
import { ClientCredentials } from './lib/credentials';

export class VitalClient {
  config: ClientConfig;
  clientCredentials: ClientCredentials;
  Activity: ActivityApi;
  Link: LinkApi;
  Body: BodyApi;
  ProviderSpecific: ProviderSpecificApi;
  Sleep: SleepApi;
  User: UserApi;
  Workouts: WorkoutsApi;
  Webhooks: WebhooksApi;

  constructor(config: ClientConfig) {
    this.config = config;
    this.clientCredentials = new ClientCredentials(config);
    const baseURL = CONFIG.baseUrls[config.environment].concat('/v1');
    const axiosApiInstance = axios.create();

    axiosRetry(axiosApiInstance, {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay,
    });

    axiosApiInstance.interceptors.request.use(
      async (config) => {
        const token = await this.clientCredentials.access_token();
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    // Hook APIS
    this.Activity = new ActivityApi(baseURL, axiosApiInstance);
    this.Link = new LinkApi(baseURL, axiosApiInstance);
    this.Body = new BodyApi(baseURL, axiosApiInstance);
    this.ProviderSpecific = new ProviderSpecificApi(baseURL, axiosApiInstance);
    this.Sleep = new SleepApi(baseURL, axiosApiInstance);
    this.User = new UserApi(baseURL, axiosApiInstance);
    this.Workouts = new WorkoutsApi(baseURL, axiosApiInstance);
    this.Webhooks = new WebhooksApi(baseURL, axiosApiInstance);
  }
}
