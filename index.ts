import {
  ActivityApi,
  BodyApi,
  LinkApi,
  ProviderSpecificApi,
  SleepApi,
  UserApi,
  WebhooksApi,
  WorkoutsApi,
} from "./swagger_client";
import axios from "axios";
import { ClientConfig } from "./lib";
import CONFIG from "./lib/config";
import { ClientCredentials } from "./lib/credentials";

export class VitalClient {
  config: ClientConfig;
  clientCredentials: ClientCredentials;
  Activity: ActivityApi;
  LinkToken: LinkApi;
  Body: BodyApi;
  ProviderSpecific: ProviderSpecificApi;
  Sleep: SleepApi;
  User: UserApi;
  Workouts: WorkoutsApi;
  Webhooks: WebhooksApi;

  constructor(config: ClientConfig) {
    this.config = config;
    this.clientCredentials = new ClientCredentials(config);
    const baseURL = CONFIG.baseUrls[config.environment];
    const baseConfig = { accessToken: this.clientCredentials.access_token() };
    const axiosApiInstance = axios.create();

    axiosApiInstance.interceptors.request.use(
      async (config) => {
        const token = await this.clientCredentials.access_token();
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    // Hook APIS
    this.Activity = new ActivityApi(baseConfig, baseURL, axiosApiInstance);
    this.LinkToken = new LinkApi(baseConfig, baseURL, axiosApiInstance);
    this.Body = new BodyApi(baseConfig, baseURL, axiosApiInstance);
    this.ProviderSpecific = new ProviderSpecificApi(
      baseConfig,
      baseURL,
      axiosApiInstance
    );
    this.Sleep = new SleepApi(baseConfig, baseURL, axiosApiInstance);
    this.User = new UserApi(baseConfig, baseURL, axiosApiInstance);
    this.Workouts = new WorkoutsApi(baseConfig, baseURL, axiosApiInstance);
    this.Webhooks = new WebhooksApi(baseConfig, baseURL, axiosApiInstance);
  }
}
