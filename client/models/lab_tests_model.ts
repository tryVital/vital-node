export type ConsentType = "terms-of-use" | "telehealth-informed-consent" | "mobile-terms-and-conditions" | "notice-of-privacy-practices" | "privacy-policy" | "hipaa-authorization";

export type Consent = {
  consentType: ConsentType;
};

export interface ShippingDetails {
  receiver_name: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  first_line: string;
  second_line?: string;
  phone_number: string;
}
export interface PatientAdress {
  receiver_name: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  first_line: string;
  second_line?: string;
}

export interface PatientDetails {
  dob: string;
  gender: string;
  email?: string;
  first_name: string;
  phone_number: string;
  last_name: string;
}

export interface HealthInsurance {
  front_image: Image;
  back_image: Image;
}

export interface Image {
  content: string;
  content_type: 'image/jpeg' | 'image/jpg' | 'image/png';
}

export interface Physician {
  first_name: string;
  last_name: string;
  npi: string;
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

export interface TestkitEvent {
  id: number;
  created_at: string;
  status: string;
}

export interface Order {
  user_id: string;
  id: string;
  team_id: string;
  patient_details: PatientDetails;
  patient_address: PatientAdress;
  physician: Physician;
  lab_test: Testkit;
  // TODO  CHECK WHAT DETAILS IS
  details: Object;
  created_at: string;
  updated_at: string;
  events: TestkitEvent;
  user_key?: string;
  sample_id?: string;
  notes?: string;
  status?:
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
    | 'unknown'
    | 'rejected'
    | 'lost';
}

export interface OrderRequestResponse {
  order: Order;
  status: string;
  message: string;
}

export interface LabClientFacing {
  slug: string;
  name: string;
  first_line_address: string;
  city: string;
  zipcode: string;
}

export interface ClientFacingLabTest {
  id: string;
  slug: string;
  name: string;
  sample_type: string;
  method: string;
  price: number;
  is_active: boolean;
  lab: LabClientFacing;
  markers: Marker;
}
export interface TestkitResponse {
  testkits: Testkit[];
}

export interface LabResultsMetadata {
  age: string;
  dob: string;
  patient: string;
  date_reported: string;
  date_collected: string;
  specimen_number: string;
  clia?: string;
  provider?: string;
  laboratory?: string;
  date_received?: string;
}

export interface LabResultsResponse {
  metadata: LabResultsMetadata;
  results: Object;
}

export interface AreaInfo {
  zip_code: string;
  phlebotomy: PhlebotomyAreaInfo;
}

export interface PhlebotomyAreaInfo {
  is_served: boolean;
}
