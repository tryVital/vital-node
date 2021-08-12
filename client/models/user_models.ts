export interface UserKeyResponse {
  client_user_id: string;
  user_key: string;
}

export interface SuccessResponse {
  success: boolean;
}

export interface SourceClientFacing {
  name: string;
  slug: string;
  logo: string;
}

export interface SourceWithLinkInfo {
  name: string;
  slug: string;
  description: string;
  logo: string;
  oauth_url?: string;
  auth_type: "oauth";
}

export interface ConnectedSourceClientFacing {
  source: SourceClientFacing;
}

export interface ClientFacingUser {
  user_key: string;
  team_id: string;
  client_user_id: string;
  created_on: string;
  connecte_sources: Array<ConnectedSourceClientFacing>;
}

export enum Providers {
  Oura = "oura",
  Fitbit = "fitbit",
  Garmin = "garmin",
  Whoop = "whoop",
  Strava = "strava",
  Renpho = "renpho",
  Peloton = "peloton",
  Wahoo = "wahoo",
  Zwift = "zwift",
}
