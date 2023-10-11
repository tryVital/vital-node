export interface UserIdResponse {
  client_user_id: string;
  user_id: string;
}

export interface CreateSignInTokenResponse {
  user_id: string;
  sign_in_token: string;
}

export interface SuccessResponse {
  success: boolean;
}

export interface SourceClientFacing {
  name: string;
  slug: string;
  logo: string;
}

export interface ProvidersResponse {
  providers: SourceClientFacing[];
}

export interface SourceWithLinkInfo {
  name: string;
  slug: string;
  description: string;
  logo: string;
  oauth_url?: string;
  auth_type: 'oauth';
}

export interface ConnectedSourceClientFacing {
  source: SourceClientFacing;
}

export interface ClientFacingUser {
  user_key: string;
  team_id: string;
  client_user_id: string;
  created_on: string;
  connected_sources: Array<ConnectedSourceClientFacing>;
  user_id: string;
}

export enum Providers {
  Oura = 'oura',
  Fitbit = 'fitbit',
  Garmin = 'garmin',
  Whoop = 'whoop',
  Strava = 'strava',
  Renpho = 'renpho',
  Peloton = 'peloton',
  Wahoo = 'wahoo',
  Zwift = 'zwift',
  Hammerhead = 'hammerhead',
  FreestyleLibre = "freestyle_libre",
  Withings = "withings",
  EightSleep = "eight_sleep",
  GoogleFit = "google_fit",
  AppleHealthKit = "apple_health_kit",
  IHealth = "ihealth",
  AccuchekBle = "accuchek_ble",
  ContourBle = "contour_ble",
  Beurer = "beurer",
  Dexcom = "dexcom",
  MyFitnessPal = "my_fitness_pal",
}

export interface GetTeamUsersParams {
  limit?: number;
  offset?: number;
}

export interface GetTeamUsersResponse {
  users: Array<ClientFacingUser>;
  offset: number;
  limit: number;
  total: number;
}
