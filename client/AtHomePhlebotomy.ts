import { AxiosInstance } from 'axios';

import {
  Appointment,
  AppointmentAvailability,
  AppointmentLocation,
  CancellationReason,
  USAddress,
} from './models/athome_phlebotomy_models';
import { keysToCamel } from '../lib/utils';

export class AtHomePhlebotomyApi {
  baseURL: string;
  client: AxiosInstance;

  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async appointmentAvailability(
    orderId: string,
    address: USAddress
  ): Promise<AppointmentAvailability> {
    const resp = await this.client.post(
      this.baseURL.concat(
        `/order/${orderId}/phlebotomy/appointment/availability`
      ),
      {
        first_line: address.firstLine,
        second_line: address.secondLine,
        city: address.city,
        state: address.state,
        zip_code: address.zipCode,
        unit: address.unit,
      }
    );

    return keysToCamel(resp.data);
  }

  public async bookAppointment(
    orderId: string,
    bookingKey: string
  ): Promise<Appointment> {
    const resp = await this.client.post(
      this.baseURL.concat(`/order/${orderId}/phlebotomy/appointment/book`),
      {
        booking_key: bookingKey,
      }
    );

    return keysToCamel(resp.data);
  }

  public async rescheduleAppointment(
    orderId: string,
    bookingKey: string
  ): Promise<Appointment> {
    const resp = await this.client.post(
      this.baseURL.concat(
        `/order/${orderId}/phlebotomy/appointment/reschedule`
      ),
      {
        booking_key: bookingKey,
      }
    );

    return keysToCamel(resp.data);
  }

  public async cancelAppointment(
    orderId: string,
    cancellationReasonId: string
  ): Promise<Appointment> {
    const resp = await this.client.patch(
      this.baseURL.concat(`/order/${orderId}/phlebotomy/appointment/cancel`),
      {
        cancellation_reason_id: cancellationReasonId,
      }
    );

    return keysToCamel(resp.data);
  }

  public async cancellationReasons(): Promise<CancellationReason[]> {
    const resp = await this.client.get(
      this.baseURL.concat(`/order/phlebotomy/appointment/cancellation-reasons`)
    );

    return keysToCamel(resp.data);
  }

  public async getAppointment(orderId: string): Promise<Appointment> {
    const resp = await this.client.get(
      this.baseURL.concat(`/order/${orderId}/phlebotomy/appointment`)
    );

    return keysToCamel(resp.data);
  }
}
