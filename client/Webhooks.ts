import { AxiosInstance } from "axios";
import {
  ClientWebhookResponse,
  WebhookEventTypes,
  ClientFacingWebhook
} from "./models/webhook_models";


export class WebhooksApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async getAll(): Promise<ClientWebhookResponse> {
    const resp = await this.client.get(this.baseURL + `/webhooks/`);
    return resp.data;
  }

  public async register(
    callbackUrl: string,
    verifyToken: string,
    eventType: WebhookEventTypes
  ): Promise<ClientFacingWebhook> {
    const resp = await this.client.post(this.baseURL + `/webhooks/`, {
      callback_url: callbackUrl,
      verify_token: verifyToken,
      event_type: eventType,
    });
    return resp.data;
  }

  public async deregister(webhookId: string): Promise<ClientFacingWebhook> {
    const resp = await this.client.delete(this.baseURL + `/webhooks/${webhookId}`);
    return resp.data;
  }
}
