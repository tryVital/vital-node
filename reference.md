# Reference

## Link

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">listBulkOps</a>({ ...params }) -> Vital.BulkOpsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.listBulkOps();
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

**request:** `Vital.LinkListBulkOpsRequest`

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

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">bulkImport</a>({ ...params }) -> Vital.BulkImportConnectionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.bulkImport({
    provider: "oura",
    connections: [
        {
            userId: "user_id",
            accessToken: "access_token",
            refreshToken: "refresh_token",
            providerId: "provider_id",
            expiresAt: 1,
        },
    ],
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

**request:** `Vital.BulkImportConnectionsBody`

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

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">bulkTriggerHistoricalPull</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.bulkTriggerHistoricalPull({
    userIds: ["user_ids"],
    provider: "oura",
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

**request:** `Vital.BulkTriggerHistoricalPullBody`

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

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">bulkExport</a>({ ...params }) -> Vital.BulkExportConnectionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.bulkExport({
    provider: "oura",
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

**request:** `Vital.BulkExportConnectionsBody`

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

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">bulkPause</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.bulkPause({
    userIds: ["user_ids"],
    provider: "oura",
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

**request:** `Vital.BulkPauseConnectionsBody`

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

**request:** `Vital.LinkTokenValidationRequest`

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
    provider: "oura",
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

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">emailAuth</a>({ ...params }) -> unknown</code></summary>
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
    provider: "oura",
    authType: "password",
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

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">passwordAuth</a>({ ...params }) -> unknown</code></summary>
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
    provider: "oura",
    authType: "password",
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
await client.link.generateOauthLink("oura");
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
await client.link.connectPasswordProvider("whoop", {
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
await client.link.completePasswordProviderMfa("whoop", {
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

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">connectEmailAuthProvider</a>(provider, { ...params }) -> unknown</code></summary>
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
await client.link.connectManualProvider("beurer_ble", {
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
    provider: "apple_health_kit",
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

## Electrocardiogram

<details><summary><code>client.electrocardiogram.<a href="/src/api/resources/electrocardiogram/client/Client.ts">get</a>(userId, { ...params }) -> Vital.ClientFacingElectrocardiogramResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get electrocardiogram summary for user_id

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
await client.electrocardiogram.get("user_id", {
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

**request:** `Vital.ElectrocardiogramGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Electrocardiogram.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SleepCycle

<details><summary><code>client.sleepCycle.<a href="/src/api/resources/sleepCycle/client/Client.ts">get</a>(userId, { ...params }) -> Vital.ClientSleepCycleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sleep cycle for user_id

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
await client.sleepCycle.get("user_id", {
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

**request:** `Vital.SleepCycleGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SleepCycle.RequestOptions`

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

Get profile for user_id

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

Get raw profile for user_id

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

Get activity summary for user_id

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

Get raw activity summary for user_id

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

Get workout summary for user_id

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

Get raw workout summary for user_id

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

Get sleep summary for user_id

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

<details><summary><code>client.sleep.<a href="/src/api/resources/sleep/client/Client.ts">getRaw</a>(userId, { ...params }) -> Vital.RawSleep</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get raw sleep summary for user_id

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

Get Body summary for user_id

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

Get raw Body summary for user_id

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">workoutSwimmingStrokeGrouped</a>(userId, { ...params }) -> Vital.GroupedWorkoutSwimmingStrokeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.workoutSwimmingStrokeGrouped("user_id", {
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

**request:** `Vital.VitalsWorkoutSwimmingStrokeGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">workoutDistanceGrouped</a>(userId, { ...params }) -> Vital.GroupedWorkoutDistanceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.workoutDistanceGrouped("user_id", {
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

**request:** `Vital.VitalsWorkoutDistanceGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">heartRateRecoveryOneMinuteGrouped</a>(userId, { ...params }) -> Vital.GroupedHeartRateRecoveryOneMinuteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.heartRateRecoveryOneMinuteGrouped("user_id", {
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

**request:** `Vital.VitalsHeartRateRecoveryOneMinuteGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">waistCircumferenceGrouped</a>(userId, { ...params }) -> Vital.GroupedWaistCircumferenceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.waistCircumferenceGrouped("user_id", {
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

**request:** `Vital.VitalsWaistCircumferenceGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">leanBodyMassGrouped</a>(userId, { ...params }) -> Vital.GroupedLeanBodyMassResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.leanBodyMassGrouped("user_id", {
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

**request:** `Vital.VitalsLeanBodyMassGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyMassIndexGrouped</a>(userId, { ...params }) -> Vital.GroupedBodyMassIndexResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.bodyMassIndexGrouped("user_id", {
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

**request:** `Vital.VitalsBodyMassIndexGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">basalBodyTemperatureGrouped</a>(userId, { ...params }) -> Vital.GroupedBasalBodyTemperatureResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.basalBodyTemperatureGrouped("user_id", {
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

**request:** `Vital.VitalsBasalBodyTemperatureGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">handwashingGrouped</a>(userId, { ...params }) -> Vital.GroupedHandwashingResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.handwashingGrouped("user_id", {
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

**request:** `Vital.VitalsHandwashingGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">daylightExposureGrouped</a>(userId, { ...params }) -> Vital.GroupedDaylightExposureResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.daylightExposureGrouped("user_id", {
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

**request:** `Vital.VitalsDaylightExposureGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">uvExposureGrouped</a>(userId, { ...params }) -> Vital.GroupedUvExposureResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.uvExposureGrouped("user_id", {
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

**request:** `Vital.VitalsUvExposureGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">fallGrouped</a>(userId, { ...params }) -> Vital.GroupedFallResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.fallGrouped("user_id", {
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

**request:** `Vital.VitalsFallGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">inhalerUsageGrouped</a>(userId, { ...params }) -> Vital.GroupedInhalerUsageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.inhalerUsageGrouped("user_id", {
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

**request:** `Vital.VitalsInhalerUsageGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">peakExpiratoryFlowRateGrouped</a>(userId, { ...params }) -> Vital.GroupedPeakExpiratoryFlowRateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.peakExpiratoryFlowRateGrouped("user_id", {
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

**request:** `Vital.VitalsPeakExpiratoryFlowRateGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">forcedVitalCapacityGrouped</a>(userId, { ...params }) -> Vital.GroupedForcedVitalCapacityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.forcedVitalCapacityGrouped("user_id", {
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

**request:** `Vital.VitalsForcedVitalCapacityGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">forcedExpiratoryVolume1Grouped</a>(userId, { ...params }) -> Vital.GroupedForcedExpiratoryVolume1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.forcedExpiratoryVolume1Grouped("user_id", {
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

**request:** `Vital.VitalsForcedExpiratoryVolume1GroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">wheelchairPushGrouped</a>(userId, { ...params }) -> Vital.GroupedWheelchairPushResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.wheelchairPushGrouped("user_id", {
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

**request:** `Vital.VitalsWheelchairPushGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">sleepBreathingDisturbanceGrouped</a>(userId, { ...params }) -> Vital.GroupedSleepBreathingDisturbanceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.sleepBreathingDisturbanceGrouped("user_id", {
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

**request:** `Vital.VitalsSleepBreathingDisturbanceGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">sleepApneaAlertGrouped</a>(userId, { ...params }) -> Vital.GroupedSleepApneaAlertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.sleepApneaAlertGrouped("user_id", {
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

**request:** `Vital.VitalsSleepApneaAlertGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">standDurationGrouped</a>(userId, { ...params }) -> Vital.GroupedStandDurationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.standDurationGrouped("user_id", {
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

**request:** `Vital.VitalsStandDurationGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">standHourGrouped</a>(userId, { ...params }) -> Vital.GroupedStandHourResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.standHourGrouped("user_id", {
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

**request:** `Vital.VitalsStandHourGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">heartRateAlertGrouped</a>(userId, { ...params }) -> Vital.GroupedHeartRateAlertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.heartRateAlertGrouped("user_id", {
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

**request:** `Vital.VitalsHeartRateAlertGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">afibBurdenGrouped</a>(userId, { ...params }) -> Vital.GroupedAFibBurdenResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vitals.afibBurdenGrouped("user_id", {
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

**request:** `Vital.VitalsAfibBurdenGroupedRequest`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">workoutDurationGrouped</a>(userId, { ...params }) -> Vital.GroupedWorkoutDurationResponse</code></summary>
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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">noteGrouped</a>(userId, { ...params }) -> Vital.GroupedNoteResponse</code></summary>
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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">insulinInjectionGrouped</a>(userId, { ...params }) -> Vital.GroupedInsulinInjectionResponse</code></summary>
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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">carbohydratesGrouped</a>(userId, { ...params }) -> Vital.GroupedCarbohydratesResponse</code></summary>
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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyTemperatureDeltaGrouped</a>(userId, { ...params }) -> Vital.GroupedBodyTemperatureDeltaResponse</code></summary>
