export interface PatientAdress {
  receiver_name: string;
  stringeet_number: string;
  stringeet: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone_number: string;
}

export interface Testkit {
  id: string;
  name: string;
  description: string;
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
