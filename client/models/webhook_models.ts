export type WebhookEventTypes =
  | 'activity'
  | 'workouts'
  | 'body'
  | 'sleep'
  | 'connection_error'
  | 'provider_specific';

export interface ClientFacingWebhook {
  id: string;
  url: string;
  event_type: WebhookEventTypes;
  last_event_sent: Date;
}

export interface ClientWebhookResponse {
  webhooks: Array<ClientFacingWebhook>;
}
