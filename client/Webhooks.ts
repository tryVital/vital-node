import { AxiosInstance } from 'axios';
import { signature } from './lib/WebhookVerification';
import {
  ClientWebhookResponse,
  WebhookEventTypes,
  ClientFacingWebhook,
} from './models/webhook_models';

export class WebhooksApi {
  DEFAULT_TOLERANCE: number;

  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
    this.DEFAULT_TOLERANCE = 300; // 5 minutes
  }

  public async getAll(): Promise<ClientWebhookResponse> {
    const resp = await this.client.get(this.baseURL.concat('/webhooks/'));
    return resp.data;
  }

  public async register(
    callbackUrl: string,
    verifyToken: string,
    eventType: WebhookEventTypes
  ): Promise<ClientFacingWebhook> {
    const resp = await this.client.post(this.baseURL.concat('/webhooks/'), {
      callback_url: callbackUrl,
      verify_token: verifyToken,
      event_type: eventType,
    });
    return resp.data;
  }

  public async deregister(webhookId: string): Promise<ClientFacingWebhook> {
    const resp = await this.client.delete(
      this.baseURL.concat(`/webhooks/${webhookId}`)
    );
    return resp.data;
  }

  public constructWebhookEvent(
    payload: string,
    header: string,
    secret: string,
    tolerance: number = undefined
  ): Record<string, unknown> {
    signature.verifyHeader(
      payload,
      header,
      secret,
      tolerance || this.DEFAULT_TOLERANCE
    );
    const jsonPayload = JSON.parse(payload);
    return jsonPayload;
  }
}
