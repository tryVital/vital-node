import { AxiosInstance } from 'axios';
import {
  Order,
  OrderRequestResponse,
  OrderResponse,
  PatientAdress,
  PatientDetails,
  TestkitResponse,
} from './models/testkit_models';

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

  public async get_orders(
    startDate: Date,
    endDate: Date
  ): Promise<OrderResponse> {
    const resp = await this.client.get(
      this.baseURL.concat('/testkit/orders/'),
      {
        params: { start_date: startDate, end_date: endDate },
      }
    );
    return resp.data;
  }

  public async order(
    userKey: string,
    testkitId: string,
    patientAddress: PatientAdress,
    patientDetails: PatientDetails
  ): Promise<OrderRequestResponse> {
    const resp = await this.client.post(
      this.baseURL.concat('/testkit/orders'),
      {
        user_key: userKey,
        testkit_id: testkitId,
        patient_address: patientAddress,
        patient_details: patientDetails,
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

  public async get_results(orderId: string): Promise<string> {
    const resp = await this.client.get(
      this.baseURL.concat(`/testkit/orders/${orderId}/results`),
      {
        responseType: 'arraybuffer',
      }
    );
    return resp.data;
  }
}
