import axios from 'axios';
import axiosRetry from 'axios-retry';
import {
  ActivityApi,
  BodyApi,
  LinkApi,
  SleepApi,
  TestkitsApi,
  UserApi,
  WebhooksApi,
  WorkoutsApi,
  ProfileApi,
} from './client';
import { ClientConfig } from './lib/models';
import CONFIG from './lib/config';
import { ClientCredentials } from './lib/credentials';
import { VitalsApi } from './client/Vitals';
import { ProviderApi } from './client/Provider';

export class VitalClient {
  config: ClientConfig;
  clientCredentials: ClientCredentials;
  Activity: ActivityApi;
  Link: LinkApi;
  Body: BodyApi;
  Sleep: SleepApi;
  User: UserApi;
  Workouts: WorkoutsApi;
  Webhooks: WebhooksApi;
  Vitals: VitalsApi;
  Testkits: TestkitsApi;
  Profile: ProfileApi;
  Providers: ProviderApi;

  constructor(config: ClientConfig) {
    this.config = config;
    this.clientCredentials = new ClientCredentials(config);
    const baseURL = CONFIG.baseUrls[config.environment];
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
          'x-vital-client-id': this.config.client_id,
          Authorization: `Bearer ${token}`,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    // Hook APIS
    this.Activity = new ActivityApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Link = new LinkApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Body = new BodyApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Sleep = new SleepApi(baseURL.concat('/v2'), axiosApiInstance);
    this.User = new UserApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Workouts = new WorkoutsApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Webhooks = new WebhooksApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Vitals = new VitalsApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Testkits = new TestkitsApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Profile = new ProfileApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Providers = new ProviderApi(baseURL.concat('/v2'), axiosApiInstance);
  }
}
