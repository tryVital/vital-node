# Reference

## Link

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">token</a>({ ...params }) -> Vital.LinkTokenExchangeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Endpoint to generate a user link token, to be used throughout the vital
link process. The vital link token is a one time use token, that
expires after 10 minutes. If you would like vital-link widget to launch
with a specific provider, pass in a provider in the body. If you would
like to redirect to a custom url after successful or error connection,
pass in your own custom redirect_url parameter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.token({
    userId: "user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.LinkTokenExchange`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">isTokenValid</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.isTokenValid({
    token: "token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.LinkTokenBase`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">codeCreate</a>({ ...params }) -> Vital.VitalTokenCreatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a token to invite a user of Vital mobile app to your team

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.codeCreate({
    userId: "user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.LinkCodeCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">startConnect</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

REQUEST_SOURCE: VITAL-LINK
Start link token process

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.startConnect({
    linkToken: "link_token",
    provider: Vital.Providers.Oura,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.BeginLinkTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">tokenState</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

REQUEST_SOURCE: VITAL-LINK
Check link token state - can be hit continuously used as heartbeat

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.tokenState();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.LinkTokenStateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">emailAuth</a>({ ...params }) -> Vital.ConnectionStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated. Use `POST /v2/link/provider/email/{provider}` instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.emailAuth({
    email: "email",
    provider: Vital.Providers.Oura,
    authType: Vital.AuthType.Password,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.EmailAuthLink`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">passwordAuth</a>({ ...params }) -> Vital.ConnectionStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated. Use `POST /v2/link/provider/password/{provider}` instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.passwordAuth({
    username: "username",
    password: "password",
    provider: Vital.Providers.Oura,
    authType: Vital.AuthType.Password,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.PasswordAuthLink`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">generateOauthLink</a>(oauthProvider, { ...params }) -> Vital.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint generates an OAuth link for oauth provider

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.generateOauthLink(Vital.OAuthProviders.Oura);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**oauthProvider:** `Vital.OAuthProviders`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.LinkGenerateOauthLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">connectPasswordProvider</a>(provider, { ...params }) -> Vital.ProviderLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This connects auth providers that are password based.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.connectPasswordProvider(Vital.PasswordProviders.Whoop, {
    username: "username",
    password: "password",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**provider:** `Vital.PasswordProviders`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.IndividualProviderData`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">completePasswordProviderMfa</a>(provider, { ...params }) -> Vital.ProviderLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This connects auth providers that are password based.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.completePasswordProviderMfa(Vital.PasswordProviders.Whoop, {
    mfaCode: "mfa_code",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**provider:** `Vital.PasswordProviders`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.CompletePasswordProviderMfaBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">connectEmailAuthProvider</a>(provider, { ...params }) -> Vital.ConnectionStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This connects auth providers that are email based.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.connectEmailAuthProvider("freestyle_libre", {
    email: "email",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**provider:** `Vital.EmailProviders`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.EmailProviderAuthLink`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">getAllProviders</a>({ ...params }) -> Vital.SourceLink[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET List of all available providers given the generated link token.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.getAllProviders();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.LinkGetAllProvidersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">connectManualProvider</a>(provider, { ...params }) -> Record<string, boolean></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.connectManualProvider(Vital.ManualProviders.BeurerBle, {
    userId: "user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**provider:** `Vital.ManualProviders`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.ManualConnectionData`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">connectDemoProvider</a>({ ...params }) -> Vital.DemoConnectionStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

POST Connect the given Vital user to a demo provider.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.connectDemoProvider({
    userId: "user_id",
    provider: Vital.DemoProviders.AppleHealthKit,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.DemoConnectionCreationPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Link.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Profile

<details><summary><code>client.profile.<a href="/src/api/resources/profile/client/Client.ts">get</a>(userId, { ...params }) -> Vital.ClientFacingProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily profile for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profile.get("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.ProfileGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profile.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profile.<a href="/src/api/resources/profile/client/Client.ts">getRaw</a>(userId, { ...params }) -> Vital.RawProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily profile for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profile.getRaw("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.ProfileGetRawRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profile.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Devices

<details><summary><code>client.devices.<a href="/src/api/resources/devices/client/Client.ts">getRaw</a>(userId, { ...params }) -> Vital.RawDevices</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Devices for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devices.getRaw("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.DevicesGetRawRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Devices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Activity

<details><summary><code>client.activity.<a href="/src/api/resources/activity/client/Client.ts">get</a>(userId, { ...params }) -> Vital.ClientActivityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily Activity for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.activity.get("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.ActivityGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Activity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.activity.<a href="/src/api/resources/activity/client/Client.ts">getRaw</a>(userId, { ...params }) -> Vital.RawActivity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily Activity for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.activity.getRaw("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.ActivityGetRawRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Activity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Workouts

<details><summary><code>client.workouts.<a href="/src/api/resources/workouts/client/Client.ts">get</a>(userId, { ...params }) -> Vital.ClientWorkoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily workout for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workouts.get("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.WorkoutsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workouts.<a href="/src/api/resources/workouts/client/Client.ts">getRaw</a>(userId, { ...params }) -> Vital.RawWorkout</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily workout for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workouts.getRaw("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.WorkoutsGetRawRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workouts.<a href="/src/api/resources/workouts/client/Client.ts">getByWorkoutId</a>(workoutId) -> Vital.ClientFacingStream</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workouts.getByWorkoutId("workout_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workoutId:** `string` — The Vital ID for the workout

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sleep

<details><summary><code>client.sleep.<a href="/src/api/resources/sleep/client/Client.ts">get</a>(userId, { ...params }) -> Vital.ClientSleepResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily sleep for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sleep.get("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.SleepGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sleep.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sleep.<a href="/src/api/resources/sleep/client/Client.ts">getStream</a>(userId, { ...params }) -> Vital.ClientSleepResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily sleep stream for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sleep.getStream("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.SleepGetStreamRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sleep.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sleep.<a href="/src/api/resources/sleep/client/Client.ts">getRaw</a>(userId, { ...params }) -> Vital.RawSleep</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily sleep for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sleep.getRaw("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.SleepGetRawRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sleep.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sleep.<a href="/src/api/resources/sleep/client/Client.ts">getStreamBySleepId</a>(sleepId) -> Vital.ClientFacingSleepStream</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Sleep stream for a user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sleep.getStreamBySleepId("sleep_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sleepId:** `string` — The Vital Sleep ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sleep.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Body

<details><summary><code>client.body.<a href="/src/api/resources/body/client/Client.ts">get</a>(userId, { ...params }) -> Vital.ClientBodyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily Body data for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.body.get("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.BodyGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Body.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.body.<a href="/src/api/resources/body/client/Client.ts">getRaw</a>(userId, { ...params }) -> Vital.RawBody</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Daily Body data for user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.body.getRaw("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.BodyGetRawRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Body.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Meal

<details><summary><code>client.meal.<a href="/src/api/resources/meal/client/Client.ts">get</a>(userId, { ...params }) -> Vital.ClientFacingMealResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get user's meals

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.meal.get("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.MealGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Meal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## MenstrualCycle

<details><summary><code>client.menstrualCycle.<a href="/src/api/resources/menstrualCycle/client/Client.ts">get</a>(userId, { ...params }) -> Vital.MenstrualCycleResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.menstrualCycle.get("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.MenstrualCycleGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MenstrualCycle.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Vitals

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">workoutDurationGrouped</a>(userId, { ...params }) -> Vital.ClientFacingGroupedTimeseriesResponseClientFacingWorkoutDurationSample</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.workoutDurationGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsWorkoutDurationGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">vo2MaxGrouped</a>(userId, { ...params }) -> Vital.GroupedVo2MaxResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.vo2MaxGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsVo2MaxGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">stressLevelGrouped</a>(userId, { ...params }) -> Vital.GroupedStressLevelResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.stressLevelGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsStressLevelGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">mindfulnessMinutesGrouped</a>(userId, { ...params }) -> Vital.GroupedMindfulnessMinutesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.mindfulnessMinutesGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsMindfulnessMinutesGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">caffeineGrouped</a>(userId, { ...params }) -> Vital.GroupedCaffeineResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.caffeineGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCaffeineGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">waterGrouped</a>(userId, { ...params }) -> Vital.GroupedWaterResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.waterGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsWaterGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">stepsGrouped</a>(userId, { ...params }) -> Vital.GroupedStepsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.stepsGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsStepsGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">floorsClimbedGrouped</a>(userId, { ...params }) -> Vital.GroupedFloorsClimbedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.floorsClimbedGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsFloorsClimbedGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">distanceGrouped</a>(userId, { ...params }) -> Vital.GroupedDistanceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.distanceGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsDistanceGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">caloriesBasalGrouped</a>(userId, { ...params }) -> Vital.GroupedCaloriesBasalResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.caloriesBasalGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCaloriesBasalGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">caloriesActiveGrouped</a>(userId, { ...params }) -> Vital.GroupedCaloriesActiveResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.caloriesActiveGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCaloriesActiveGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">respiratoryRateGrouped</a>(userId, { ...params }) -> Vital.GroupedRespiratoryRateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.respiratoryRateGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsRespiratoryRateGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">noteGrouped</a>(userId, { ...params }) -> Vital.ClientFacingGroupedTimeseriesResponseClientFacingNoteSample</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.noteGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsNoteGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">insulinInjectionGrouped</a>(userId, { ...params }) -> Vital.ClientFacingGroupedTimeseriesResponseClientFacingInsulinInjectionSample</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.insulinInjectionGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsInsulinInjectionGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">igeGrouped</a>(userId, { ...params }) -> Vital.GroupedIgeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.igeGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsIgeGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">iggGrouped</a>(userId, { ...params }) -> Vital.GroupedIggResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.iggGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsIggGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">hypnogramGrouped</a>(userId, { ...params }) -> Vital.GroupedHypnogramResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.hypnogramGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsHypnogramGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">hrvGrouped</a>(userId, { ...params }) -> Vital.GroupedHrvResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.hrvGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsHrvGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">heartrateGrouped</a>(userId, { ...params }) -> Vital.GroupedHeartRateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.heartrateGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsHeartrateGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">glucoseGrouped</a>(userId, { ...params }) -> Vital.GroupedGlucoseResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.glucoseGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsGlucoseGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">cholesterolGrouped</a>(userId, { ...params }) -> Vital.GroupedCholesterolResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.cholesterolGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCholesterolGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">carbohydratesGrouped</a>(userId, { ...params }) -> Vital.ClientFacingGroupedTimeseriesResponseClientFacingCarbohydratesSample</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.carbohydratesGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCarbohydratesGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyTemperatureDeltaGrouped</a>(userId, { ...params }) -> Vital.ClientFacingGroupedTimeseriesResponseClientFacingBodyTemperatureDeltaSample</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bodyTemperatureDeltaGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBodyTemperatureDeltaGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyTemperatureGrouped</a>(userId, { ...params }) -> Vital.ClientFacingGroupedTimeseriesResponseClientFacingBodyTemperatureSample</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bodyTemperatureGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBodyTemperatureGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyWeightGrouped</a>(userId, { ...params }) -> Vital.GroupedBodyWeightResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bodyWeightGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBodyWeightGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyFatGrouped</a>(userId, { ...params }) -> Vital.GroupedBodyFatResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bodyFatGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBodyFatGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bloodOxygenGrouped</a>(userId, { ...params }) -> Vital.GroupedBloodOxygenResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bloodOxygenGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBloodOxygenGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">electrocardiogramVoltageGrouped</a>(userId, { ...params }) -> Vital.GroupedElectrocardiogramVoltageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.electrocardiogramVoltageGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsElectrocardiogramVoltageGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bloodPressureGrouped</a>(userId, { ...params }) -> Vital.GroupedBloodPressureResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bloodPressureGrouped("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBloodPressureGroupedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">vo2Max</a>(userId, { ...params }) -> Vital.ClientFacingVo2MaxTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.vo2Max("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsVo2MaxRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">stressLevel</a>(userId, { ...params }) -> Vital.ClientFacingStressLevelTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.stressLevel("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsStressLevelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">mindfulnessMinutes</a>(userId, { ...params }) -> Vital.ClientFacingMindfulnessMinutesTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.mindfulnessMinutes("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsMindfulnessMinutesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">caffeine</a>(userId, { ...params }) -> Vital.ClientFacingCaffeineTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.caffeine("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCaffeineRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">water</a>(userId, { ...params }) -> Vital.ClientFacingWaterTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.water("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsWaterRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">steps</a>(userId, { ...params }) -> Vital.ClientFacingStepsTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.steps("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsStepsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">floorsClimbed</a>(userId, { ...params }) -> Vital.ClientFacingFloorsClimbedTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.floorsClimbed("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsFloorsClimbedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">distance</a>(userId, { ...params }) -> Vital.ClientFacingDistanceTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.distance("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsDistanceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">caloriesBasal</a>(userId, { ...params }) -> Vital.ClientFacingCaloriesBasalTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.caloriesBasal("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCaloriesBasalRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">caloriesActive</a>(userId, { ...params }) -> Vital.ClientFacingCaloriesActiveTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.caloriesActive("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCaloriesActiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">respiratoryRate</a>(userId, { ...params }) -> Vital.ClientFacingRespiratoryRateTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.respiratoryRate("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsRespiratoryRateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">ige</a>(userId, { ...params }) -> Vital.ClientFacingIgeTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.ige("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsIgeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">igg</a>(userId, { ...params }) -> Vital.ClientFacingIggTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.igg("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsIggRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">hypnogram</a>(userId, { ...params }) -> Vital.ClientFacingHypnogramTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.hypnogram("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsHypnogramRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">hrv</a>(userId, { ...params }) -> Vital.ClientFacingHrvTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.hrv("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsHrvRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">heartrate</a>(userId, { ...params }) -> Vital.ClientFacingHeartRateTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.heartrate("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsHeartrateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">glucose</a>(userId, { ...params }) -> Vital.ClientFacingGlucoseTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.glucose("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsGlucoseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">cholesterolTriglycerides</a>(userId, { ...params }) -> Vital.ClientFacingCholesterolTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.cholesterolTriglycerides("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCholesterolTriglyceridesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">cholesterolTotal</a>(userId, { ...params }) -> Vital.ClientFacingCholesterolTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.cholesterolTotal("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCholesterolTotalRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">cholesterolLdl</a>(userId, { ...params }) -> Vital.ClientFacingCholesterolTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.cholesterolLdl("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCholesterolLdlRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">cholesterolHdl</a>(userId, { ...params }) -> Vital.ClientFacingCholesterolTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.cholesterolHdl("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCholesterolHdlRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">cholesterol</a>(userId, { ...params }) -> Vital.ClientFacingCholesterolTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.cholesterol("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsCholesterolRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyWeight</a>(userId, { ...params }) -> Vital.ClientFacingBodyWeightTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bodyWeight("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBodyWeightRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyFat</a>(userId, { ...params }) -> Vital.ClientFacingBodyFatTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bodyFat("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBodyFatRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bloodOxygen</a>(userId, { ...params }) -> Vital.ClientFacingBloodOxygenTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bloodOxygen("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBloodOxygenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">electrocardiogramVoltage</a>(userId, { ...params }) -> Vital.ClientFacingElectrocardiogramVoltageTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.electrocardiogramVoltage("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsElectrocardiogramVoltageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bloodPressure</a>(userId, { ...params }) -> Vital.ClientFacingBloodPressureTimeseries[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bloodPressure("user_id", {
    startDate: "start_date",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalsBloodPressureRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vitals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## User

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getAll</a>({ ...params }) -> Vital.PaginatedUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET All users for team.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getAll();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.UserGetAllRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">create</a>({ ...params }) -> Vital.ClientFacingUserKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

POST Create a Vital user given a client_user_id and returns the user_id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.create({
    clientUserId: "client_user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vital.UserCreateBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getTeamMetrics</a>() -> Vital.MetricsResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET metrics for team.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getTeamMetrics();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getUserSignInToken</a>(userId) -> Vital.UserSignInTokenResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getUserSignInToken("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getConnectedProviders</a>(userId) -> Record<string, Vital.ClientFacingProviderWithStatus[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET Users connected providers

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getConnectedProviders("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
