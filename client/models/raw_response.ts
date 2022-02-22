import { SourceClientFacing } from './user_models';

export interface RawResponse {
  id: string;
  user_id: string;
  source_id: number;
  source?: SourceClientFacing;
  priority: number;
  priority_id: number;
  timestamp: Date;
  data: Record<string, string>;
  provider_id: string;
}

export interface DeviceRawResponse {
  id: string;
  user_id: string;
  source_id: number;
  source?: SourceClientFacing;
  data: Record<string, string>;
  provider_id: string;
}

export interface ClientActivityRawResponse {
  activity: RawResponse[];
}
export interface ClientWorkoutsRawResponse {
  workouts: RawResponse[];
}
export interface ClientBodyRawResponse {
  body: RawResponse[];
}

export interface ClientSleepRawResponse {
  sleep: RawResponse[];
}

export interface ClientProfileRawResponse {
  profile: RawResponse[];
}

export interface ClientDevicesRawResponse {
  devices: DeviceRawResponse[];
}
