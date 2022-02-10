import { AxiosInstance } from 'axios';
import { Webhook } from 'svix';

export class WebhooksApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public constructWebhookEvent(
    payload: string,
    headers: Record<string, string>,
    secret: string
  ): unknown {
    const wh = new Webhook(secret);
    return wh.verify(payload, headers);
  }
}
