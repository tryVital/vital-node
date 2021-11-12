import { AxiosInstance } from 'axios';
import { signature } from './lib/WebhookVerification';
import {
  Order,
  OrderRequestResponse,
  OrderResponse,
  PatientAdress,
  Testkit,
  TestkitResponse,
} from './models/testkit_models';
import {
  ClientWebhookResponse,
  WebhookEventTypes,
  ClientFacingWebhook,
} from './models/webhook_models';

export class TestkitsApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async get(): Promise<TestkitResponse> {
    const resp = await this.client.get(this.baseURL.concat('/testkit'));
    return resp.data;
  }

  public async get_orders(): Promise<OrderResponse> {
    const resp = await this.client.get(this.baseURL.concat('/testkit/orders'));
    return resp.data;
  }

  public async order(
    userKey: string,
    testkitId: string,
    patientAddress: PatientAdress
  ): Promise<OrderRequestResponse> {
    const resp = await this.client.post(
      this.baseURL.concat('/testkit/orders'),
      {
        user_key: userKey,
        testkit_id: testkitId,
        patient_address: patientAddress,
      }
    );
    return resp.data;
  }

  public async get_order(orderId: string): Promise<Order> {
    const resp = await this.client.get(
      this.baseURL.concat(`/testkit/orders/${orderId}`)
    );
    return resp.data;
  }
}
