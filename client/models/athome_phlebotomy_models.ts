type Type = 'phlebotomy';
type Provider = 'getlabs';
type Status =
  | 'confirmed'
  | 'pending'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export interface Appointment {
  id: string;
  userId: string;
  address: USAddress;
  location: AppointmentLocation;
  startAt: string;
  endAt: string;
  ianaTimezone: string;
  type: Type;
  provider: Provider;
  status: Status;
  providerId: string;
  canReschedule: boolean;
}

export interface USAddress {
  firstLine: string;
  secondLine?: string;
  city: string;
  state: string;
  zipCode: string;
  unit?: string;
}

export interface AppointmentAvailability {
  timezone: string;
  slots: AppointmentSlot[];
}

export interface AppointmentSlot {
  bookingKey: string;
  start: string;
  end: string;
  expiresAt: string;
  price: number;
  isPriority: boolean;
  numAppointmentsAvailable: number;
}

export interface CancellationReason {
  id: string;
  name: string;
  isRefundable: boolean;
}
