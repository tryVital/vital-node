import axios from 'axios';
import axiosRetry from 'axios-retry';
import {
  ActivityApi,
  AtHomePhlebotomyApi,
  BodyApi,
  LinkApi,
  SleepApi,
  UserApi,
  WebhooksApi,
  WorkoutsApi,
  ProfileApi,
  DevicesAPI,
  MealsApi,
  LabTestsApi,
} from './client';
import { ClientConfig } from './lib/models';
import CONFIG from './lib/config';
import { VitalsApi } from './client/Vitals';
import { ProviderApi } from './client/Provider';

export class VitalClient {
  config: ClientConfig;
  Activity: ActivityApi;
  Link: LinkApi;
  Body: BodyApi;
  Meals: MealsApi;
  Sleep: SleepApi;
  User: UserApi;
  Workouts: WorkoutsApi;
  Webhooks: WebhooksApi;
  Vitals: VitalsApi;
  LabTests: LabTestsApi;
  AtHomePhlebotomy: AtHomePhlebotomyApi;
  Profile: ProfileApi;
  Providers: ProviderApi;
  Devices: DevicesAPI;

  constructor(config: ClientConfig) {
    this.config = config;
    if (!config.api_key) {
      throw new Error('You must provide an API key');
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
        headers['x-vital-api-key'] = this.config.api_key;
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
    this.LabTests = new LabTestsApi(baseURL.concat('/v3'), axiosApiInstance);
    this.AtHomePhlebotomy = new AtHomePhlebotomyApi(
      baseURL.concat('/v3'),
      axiosApiInstance
    );
    this.Profile = new ProfileApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Providers = new ProviderApi(baseURL.concat('/v2'), axiosApiInstance);
    this.Devices = new DevicesAPI(baseURL.concat('/v2'), axiosApiInstance);
    this.Meals = new MealsApi(baseURL.concat('/v2'), axiosApiInstance);
  }
}
