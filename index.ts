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
  DevicesAPI,
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
  Devices: DevicesAPI;

  constructor(config: ClientConfig) {
    this.config = config;
    if(!config.api_key){
      try {
        this.clientCredentials = new ClientCredentials(config);
      } catch (error) {
        throw new Error("You must provide either an API key or a client ID and secret");
      }
    }
    let baseURL;
    if (this.config.region && this.config.region === 'eu') {
      baseURL = CONFIG.baseEUUrls[config.environment];
    } else {
      baseURL = CONFIG.baseUrls[config.environment];
    }
    const axiosApiInstance = axios.create();

    axiosRetry(axiosApiInstance, {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay,
    });

    axiosApiInstance.interceptors.request.use(
      async (config) => {
        const headers = config.headers;
        if(this.config.api_key){
          headers["x-vital-api-key"] = this.config.api_key;
        } else {
          const token = await this.clientCredentials.access_token();
          headers["Authorization"] = `Bearer ${token}`;
          headers["x-vital-client-id"] = this.config.client_id;
        }
        config.headers = {
          ...headers,
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
    this.Devices = new DevicesAPI(baseURL.concat('/v2'), axiosApiInstance);
  }
}
