# Vital Node Client

Node client for using Vital API.


### Install

With npm:

```
npm i @tryvital/vital-node
```

With yarn

```
yarn add @tryvital/vital-node
```


## Documentation

The official [Vital Link docs](https://docs.tryvital.io) provide a full reference on using this library.


### Examples
```
const { VitalClient } = require("Vital");

const client = new VitalClient({
  client_id: <CLIENT_ID>,
  client_secret:  <CLIENT_SECRET>,
  environment: "sandbox",
});

const resp = await client.User.getUser(user_key)
const data = await resp.data
```
