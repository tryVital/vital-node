import { AxiosInstance } from 'axios';
import {
  LabResultsMetadata,
  LabResultsRaw,
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
    endDate: Date,
    status?: string[],
  ): Promise<OrderResponse> {
    const resp = await this.client.get(
      this.baseURL.concat('/testkit/orders/'),
      {
        params: { start_date: startDate, end_date: endDate, status: status ? status : null},
      }
    );
    return resp.data;
  }

  public async order(
    userId: string,
    testkitId: string,
    patientAddress: PatientAdress,
    patientDetails: PatientDetails
  ): Promise<OrderRequestResponse> {
    const resp = await this.client.post(
      this.baseURL.concat('/testkit/orders'),
      {
        user_key: userId,
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

  public async cancel_order(orderId: string): Promise<OrderRequestResponse> {
    const resp = await this.client.post(
      this.baseURL.concat(`/testkit/orders/${orderId}/cancel`)
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

  public async getMetadata(orderId: string): Promise<LabResultsMetadata> {
    const resp = await this.client.get(
      this.baseURL.concat(`/testkit/orders/${orderId}/results/metadata`)
    );
    return resp.data;
  }

  public async getRawResults(orderId: string): Promise<LabResultsRaw> {
    const resp = await this.client.get(
      this.baseURL.concat(`/testkit/orders/${orderId}/results/raw`)
    );
    return resp.data;
  }
}
