export enum Resource {
  WORKOUTS = 'workouts',
  ACTVITY = 'activity',
  SLEEP = 'sleep',
  BODY = 'body',
  WORKOUTS_STREAM = 'workouts/stream',
  SLEEP_STREAM = 'sleep/stream',
  HEARTRATE = 'heartrate',
  GLUCOSE = 'glucose',
  PROFILE = 'profile',
}

export interface Provider {
  name: string;
  slug: string;
  logo: string;
  auth_type: 'password' | 'email' | 'oauth';
  supported_resources: Resource[];
}
