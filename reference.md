# Reference

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
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">get</a>(userId) -> Vital.ClientFacingUser</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET User details given the user_id.

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
await client.user.get("user_id");
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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">delete</a>(userId) -> Vital.UserSuccessResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.delete("user_id");
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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">patch</a>(userId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.patch("user_id");
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

**request:** `Vital.UserPatchBody`

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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getLatestUserInfo</a>(userId) -> Vital.UserInfo</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getLatestUserInfo("user_id");
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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">createInsurance</a>(userId, { ...params }) -> Vital.ClientFacingInsurance</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.createInsurance("user_id", {
    payorCode: "payor_code",
    memberId: "member_id",
    relationship: "Self",
    insured: {
        firstName: "first_name",
        lastName: "last_name",
        gender: "female",
        address: {
            firstLine: "first_line",
            country: "country",
            zip: "zip",
            city: "city",
            state: "state",
        },
        dob: "dob",
        email: "email",
        phoneNumber: "phone_number",
    },
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

**request:** `Vital.CreateInsuranceRequest`

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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getLatestInsurance</a>(userId) -> Vital.ClientFacingInsurance</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getLatestInsurance("user_id");
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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">upsertUserInfo</a>(userId, { ...params }) -> Vital.UserInfo</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.upsertUserInfo("user_id", {
    firstName: "first_name",
    lastName: "last_name",
    email: "email",
    phoneNumber: "phone_number",
    gender: "gender",
    dob: "dob",
    address: {
        firstLine: "first_line",
        country: "country",
        zip: "zip",
        city: "city",
        state: "state",
    },
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

**request:** `Vital.UserInfoCreateRequest`

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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getByClientUserId</a>(clientUserId) -> Vital.ClientFacingUser</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET user_id from client_user_id.

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
await client.user.getByClientUserId("client_user_id");
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

**clientUserId:** `string` — A unique ID representing the end user. Typically this will be a user ID number from your application. Personally identifiable information, such as an email address or phone number, should not be used in the client_user_id.

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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">deregisterProvider</a>(userId, provider) -> Vital.UserSuccessResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.deregisterProvider("user_id", "oura");
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

**provider:** `Vital.Providers` — Provider slug. e.g., `oura`, `fitbit`, `garmin`.

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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">undoDelete</a>({ ...params }) -> Vital.UserSuccessResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.undoDelete();
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

**request:** `Vital.UserUndoDeleteRequest`

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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">refresh</a>(userId, { ...params }) -> Vital.UserRefreshSuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger a manual refresh for a specific user

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
await client.user.refresh("user_id");
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

**request:** `Vital.UserRefreshRequest`

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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getDevices</a>(userId) -> Vital.ClientFacingDevice[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getDevices("user_id");
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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getDevice</a>(userId, deviceId) -> Vital.ClientFacingDevice</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getDevice("user_id", "device_id");
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

**deviceId:** `string`

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

## Providers

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">getAll</a>({ ...params }) -> Vital.ClientFacingProviderDetailed[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Provider list

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
await client.providers.getAll();
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

**request:** `Vital.ProvidersGetAllRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Team

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">getLinkConfig</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Post teams.

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
await client.team.getLinkConfig();
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

**request:** `Vital.TeamGetLinkConfigRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">get</a>(teamId) -> Vital.ClientFacingTeam</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get team.

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
await client.team.get("team_id");
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

**teamId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">getUserById</a>({ ...params }) -> Vital.ClientFacingUser[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search team users by user_id

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
await client.team.getUserById();
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

**request:** `Vital.TeamGetUserByIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">getSvixUrl</a>() -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.getSvixUrl();
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

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">getSourcePriorities</a>({ ...params }) -> Record<string, unknown>[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET source priorities.

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
await client.team.getSourcePriorities();
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

**request:** `Vital.TeamGetSourcePrioritiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">updateSourcePriorities</a>() -> Record<string, unknown>[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Patch source priorities.

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
await client.team.updateSourcePriorities();
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

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">getPhysicians</a>(teamId) -> Vital.ClientFacingPhysician[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.getPhysicians("team_id");
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

**teamId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

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

<details><summary><code>client.vitals.<a href="/src/api/resources/vitals/client/Client.ts">bodyTemperatureGrouped</a>(userId, { ...params }) -> Vital.GroupedBodyTemperatureResponse</code></summary>
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

## Introspect

<details><summary><code>client.introspect.<a href="/src/api/resources/introspect/client/Client.ts">getUserResources</a>({ ...params }) -> Vital.UserResourcesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.introspect.getUserResources();
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

**request:** `Vital.IntrospectGetUserResourcesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Introspect.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.introspect.<a href="/src/api/resources/introspect/client/Client.ts">getUserHistoricalPulls</a>({ ...params }) -> Vital.UserHistoricalPullsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.introspect.getUserHistoricalPulls();
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

**request:** `Vital.IntrospectGetUserHistoricalPullsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Introspect.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## LabTests

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">get</a>({ ...params }) -> Vital.ClientFacingLabTest[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET all the lab tests the team has access to.

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
await client.labTests.get();
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

**request:** `Vital.LabTestsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">create</a>({ ...params }) -> Vital.ClientFacingLabTest</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.create({
    name: "name",
    method: "testkit",
    description: "description",
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

**request:** `Vital.CreateLabTestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getById</a>(labTestId) -> Vital.ClientFacingLabTest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET all the lab tests the team has access to.

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
await client.labTests.getById("lab_test_id");
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

**labTestId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">updateLabTest</a>(labTestId, { ...params }) -> Vital.ClientFacingLabTest</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.updateLabTest("lab_test_id");
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

**labTestId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.UpdateLabTestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getMarkers</a>({ ...params }) -> Vital.GetMarkersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET all the markers for the given lab.

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
await client.labTests.getMarkers();
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

**request:** `Vital.LabTestsGetMarkersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getMarkersForOrderSet</a>({ ...params }) -> Vital.GetMarkersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.getMarkersForOrderSet({
    body: {},
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

**request:** `Vital.LabTestsGetMarkersForOrderSetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getMarkersForLabTest</a>(labTestId, { ...params }) -> Vital.GetMarkersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.getMarkersForLabTest("lab_test_id");
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

**labTestId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.LabTestsGetMarkersForLabTestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getMarkersByLabAndProviderId</a>(providerId, labId) -> Vital.ClientFacingMarker</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET a specific marker for the given lab and provider_id

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
await client.labTests.getMarkersByLabAndProviderId("provider_id", 1);
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

**providerId:** `string`

</dd>
</dl>

<dl>
<dd>

**labId:** `number`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getLabs</a>() -> Vital.ClientFacingLab[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET all the labs.

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
await client.labTests.getLabs();
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

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getPaginated</a>({ ...params }) -> Vital.LabTestResourcesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET lab tests the team has access to as a paginated list.

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
await client.labTests.getPaginated();
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

**request:** `Vital.LabTestsGetPaginatedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getOrders</a>({ ...params }) -> Vital.GetOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET many orders with filters.

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
await client.labTests.getOrders();
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

**request:** `Vital.LabTestsGetOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getPhlebotomyAppointmentAvailability</a>({ ...params }) -> Vital.AppointmentAvailabilitySlots</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the available time slots to book an appointment with a phlebotomist
for the given address and order.

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
await client.labTests.getPhlebotomyAppointmentAvailability({
    body: {
        firstLine: "first_line",
        city: "city",
        state: "state",
        zipCode: "zip_code",
    },
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

**request:** `Vital.LabTestsGetPhlebotomyAppointmentAvailabilityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">bookPhlebotomyAppointment</a>(orderId, { ...params }) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Book an at-home phlebotomy appointment.

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
await client.labTests.bookPhlebotomyAppointment("order_id", {
    bookingKey: "booking_key",
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.AppointmentBookingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">requestPhlebotomyAppointment</a>(orderId, { ...params }) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Request an at-home phlebotomy appointment.

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
await client.labTests.requestPhlebotomyAppointment("order_id", {
    address: {
        firstLine: "first_line",
        city: "city",
        state: "state",
        zipCode: "zip_code",
    },
    provider: "getlabs",
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.RequestAppointmentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">reschedulePhlebotomyAppointment</a>(orderId, { ...params }) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reschedule a previously booked at-home phlebotomy appointment.

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
await client.labTests.reschedulePhlebotomyAppointment("order_id", {
    bookingKey: "booking_key",
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.AppointmentRescheduleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">cancelPhlebotomyAppointment</a>(orderId, { ...params }) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a previously booked at-home phlebotomy appointment.

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
await client.labTests.cancelPhlebotomyAppointment("order_id", {
    cancellationReasonId: "cancellation_reason_id",
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.ApiApiV1EndpointsVitalApiLabTestingOrdersHelpersAppointmentCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getPhlebotomyAppointmentCancellationReason</a>() -> Vital.ClientFacingAppointmentCancellationReason[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the list of reasons for cancelling an at-home phlebotomy appointment.

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
await client.labTests.getPhlebotomyAppointmentCancellationReason();
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

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getPhlebotomyAppointment</a>(orderId) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the appointment associated with an order.

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
await client.labTests.getPhlebotomyAppointment("order_id");
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getAreaInfo</a>({ ...params }) -> Vital.AreaInfo</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET information about an area with respect to lab-testing.

Information returned:

-   Whether a given zip code is served by our Phlebotomy network.
-   List of Lab locations in the area.
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
await client.labTests.getAreaInfo({
    zipCode: "zip_code",
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

**request:** `Vital.LabTestsGetAreaInfoRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getPscInfo</a>({ ...params }) -> Vital.PscInfo</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.getPscInfo({
    zipCode: "zip_code",
    labId: 1,
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

**request:** `Vital.LabTestsGetPscInfoRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getOrderPscInfo</a>(orderId, { ...params }) -> Vital.PscInfo</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.getOrderPscInfo("order_id");
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.LabTestsGetOrderPscInfoRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getResultMetadata</a>(orderId) -> Vital.LabResultsMetadata</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return metadata related to order results, such as lab metadata,
provider and sample dates.

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
await client.labTests.getResultMetadata("order_id");
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

**orderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getResultRaw</a>(orderId) -> Vital.LabResultsRaw</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return both metadata and raw json test data

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
await client.labTests.getResultRaw("order_id");
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

**orderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getPscAppointmentAvailability</a>({ ...params }) -> Vital.AppointmentAvailabilitySlots</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.getPscAppointmentAvailability({
    lab: "quest",
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

**request:** `Vital.LabTestsGetPscAppointmentAvailabilityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">bookPscAppointment</a>(orderId, { ...params }) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.bookPscAppointment("order_id", {
    bookingKey: "booking_key",
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.AppointmentBookingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">reschedulePscAppointment</a>(orderId, { ...params }) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.reschedulePscAppointment("order_id", {
    bookingKey: "booking_key",
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.AppointmentRescheduleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">cancelPscAppointment</a>(orderId, { ...params }) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.cancelPscAppointment("order_id", {
    cancellationReasonId: "cancellationReasonId",
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.VitalCoreClientsLabTestGetlabsSchemaAppointmentCancelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getPscAppointmentCancellationReason</a>() -> Vital.ClientFacingAppointmentCancellationReason[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.getPscAppointmentCancellationReason();
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

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getPscAppointment</a>(orderId) -> Vital.ClientFacingAppointment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the appointment associated with an order.

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
await client.labTests.getPscAppointment("order_id");
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">getOrder</a>(orderId) -> Vital.ClientFacingOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

GET individual order by ID.

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
await client.labTests.getOrder("order_id");
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">createOrder</a>({ ...params }) -> Vital.PostOrderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.createOrder({
    userId: "user_id",
    patientDetails: {
        firstName: "first_name",
        lastName: "last_name",
        dob: "dob",
        gender: "female",
        phoneNumber: "phone_number",
        email: "email",
    },
    patientAddress: {
        firstLine: "first_line",
        city: "city",
        state: "state",
        zip: "zip",
        country: "country",
    },
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

**request:** `Vital.CreateOrderRequestCompatible`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">importOrder</a>({ ...params }) -> Vital.PostOrderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labTests.importOrder({
    userId: "user_id",
    billingType: "client_bill",
    orderSet: {},
    collectionMethod: "testkit",
    patientDetails: {
        firstName: "first_name",
        lastName: "last_name",
        dob: "dob",
        gender: "female",
        phoneNumber: "phone_number",
        email: "email",
    },
    patientAddress: {
        receiverName: "receiver_name",
        firstLine: "first_line",
        city: "city",
        state: "state",
        zip: "zip",
        country: "country",
    },
    sampleId: "sample_id",
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

**request:** `Vital.ImportOrderBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">cancelOrder</a>(orderId) -> Vital.PostOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

POST cancel order

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
await client.labTests.cancelOrder("order_id");
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">simulateOrderProcess</a>(orderId, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get available test kits.

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
await client.labTests.simulateOrderProcess("order_id", {
    body: undefined,
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

**orderId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.LabTestsSimulateOrderProcessRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labTests.<a href="/src/api/resources/labTests/client/Client.ts">updateOnSiteCollectionOrderDrawCompleted</a>(orderId) -> Vital.PostOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

PATCH update on site collection order when draw is completed

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
await client.labTests.updateOnSiteCollectionOrderDrawCompleted("order_id");
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

**orderId:** `string` — Your Order ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LabTests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Testkit

<details><summary><code>client.testkit.<a href="/src/api/resources/testkit/client/Client.ts">register</a>({ ...params }) -> Vital.PostOrderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testkit.register({
    sampleId: "sample_id",
    patientDetails: {
        firstName: "first_name",
        lastName: "last_name",
        dob: "dob",
        gender: "female",
        phoneNumber: "phone_number",
        email: "email",
    },
    patientAddress: {
        firstLine: "first_line",
        city: "city",
        state: "state",
        zip: "zip",
        country: "country",
    },
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

**request:** `Vital.RegisterTestkitRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Testkit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testkit.<a href="/src/api/resources/testkit/client/Client.ts">createOrder</a>({ ...params }) -> Vital.PostOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an order for an unregistered testkit

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
await client.testkit.createOrder({
    userId: "user_id",
    labTestId: "lab_test_id",
    shippingDetails: {
        receiverName: "receiver_name",
        firstLine: "first_line",
        city: "city",
        state: "state",
        zip: "zip",
        country: "country",
        phoneNumber: "phone_number",
    },
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

**request:** `Vital.CreateRegistrableTestkitOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Testkit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Order

<details><summary><code>client.order.<a href="/src/api/resources/order/client/Client.ts">resendEvents</a>({ ...params }) -> Vital.ResendWebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replay a webhook for a given set of orders

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
await client.order.resendEvents();
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

**request:** `Vital.ResendWebhookBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Insurance

<details><summary><code>client.insurance.<a href="/src/api/resources/insurance/client/Client.ts">searchGetPayorInfo</a>({ ...params }) -> Vital.ClientFacingPayorSearchResponse[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insurance.searchGetPayorInfo();
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

**request:** `Vital.InsuranceSearchGetPayorInfoRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Insurance.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insurance.<a href="/src/api/resources/insurance/client/Client.ts">searchPayorInfo</a>({ ...params }) -> Vital.ClientFacingPayorSearchResponseDeprecated[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insurance.searchPayorInfo();
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

**request:** `Vital.PayorSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Insurance.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insurance.<a href="/src/api/resources/insurance/client/Client.ts">searchDiagnosis</a>({ ...params }) -> Vital.ClientFacingDiagnosisInformation[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insurance.searchDiagnosis({
    diagnosisQuery: "diagnosis_query",
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

**request:** `Vital.InsuranceSearchDiagnosisRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Insurance.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payor

<details><summary><code>client.payor.<a href="/src/api/resources/payor/client/Client.ts">createPayor</a>({ ...params }) -> Vital.ClientFacingPayor</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payor.createPayor({
    name: "name",
    address: {
        firstLine: "first_line",
        country: "country",
        zip: "zip",
        city: "city",
        state: "state",
    },
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

**request:** `Vital.CreatePayorBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payor.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Aggregate

<details><summary><code>client.aggregate.<a href="/src/api/resources/aggregate/client/Client.ts">queryOne</a>(userId, { ...params }) -> Vital.AggregationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aggregate.queryOne("user_id", {
    timeframe: {
        type: "relative",
        anchor: "anchor",
        past: {
            unit: "minute",
        },
    },
    queries: [
        {
            select: [
                {
                    arg: {
                        sleep: "id",
                    },
                    func: "mean",
                },
            ],
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

**userId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.QueryBatch`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregate.<a href="/src/api/resources/aggregate/client/Client.ts">getResultTableForContinuousQuery</a>(userId, queryIdOrSlug) -> Vital.AggregationResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aggregate.getResultTableForContinuousQuery("user_id", "query_id_or_slug");
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

**queryIdOrSlug:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregate.<a href="/src/api/resources/aggregate/client/Client.ts">getTaskHistoryForContinuousQuery</a>(userId, queryIdOrSlug, { ...params }) -> Vital.ContinuousQueryTaskHistoryResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aggregate.getTaskHistoryForContinuousQuery("user_id", "query_id_or_slug");
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

**queryIdOrSlug:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vital.AggregateGetTaskHistoryForContinuousQueryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
