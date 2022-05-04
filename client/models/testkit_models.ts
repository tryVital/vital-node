export interface PatientAdress {
  receiver_name: string;
  first_line: string;
  second_line?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone_number: string;
}

export interface PatientDetails {
  dob: string;
  gender: string;
}
export interface Marker {
  name: string;
  slug: string;
  description?: string;
}

export interface Testkit {
  id: string;
  name: string;
  description: string;
  markers: Marker[];
  turnaround_time_lower: number;
  turnaround_time_upper: number;
  price: number;
}

export interface Order {
  id: string;
  team_id: string;
  created_on: Date;
  updated_on: Date;
  status:
  | 'ordered'
  | 'transit_customer'
  | 'out_for_delivery'
  | 'with_customer'
  | 'transit_lab'
  | 'delivered_to_lab'
  | 'processing_lab'
  | 'completed'
  | 'failure_to_deliver_to_customer'
  | 'failure_to_deliver_to_lab'
  | 'cancelled'
  | 'do_not_process'
  | 'unknown';
  user_key: string;
  testkit_id: string;
  testkit: Testkit;
  inbound_tracking_number?: string;
  outbound_tracking_number?: string;
  outbound_courier?: string;
  inbound_courier?: string;
}

export interface OrderResponse {
  orders: Order[];
}

export interface OrderRequestResponse {
  order: Order;
  status: string;
  message: string;
}

export interface TestkitResponse {
  testkits: Testkit[];
}

export interface LabResultsMetadata {
  age: string;
  dob: string;
  clia_number: string;
  patient: string;
  provider: string;
  laboratory: string;
  date_reported: string;
  date_collected: string;
  specimen_number: string;
  date_received?: string;
  clia?: string;
}

export interface LabResultsRaw {
  metadata: LabResultsMetadata;
  data: Record<string, string>;
}
