import { VitalClient } from "..";

export const testClient = new VitalClient({
    client_id: process.env.TEST_CLIENT_ID,
    client_secret: process.env.TEST_CLIENT_SECRET,
    environment: process.env.TEST_ENVIRONMENT as any,
    region: "us",
});

export const testEuClient = new VitalClient({
    client_id: process.env.TEST_EU_CLIENT_ID,
    client_secret: process.env.TEST_EU_CLIENT_SECRET,
    environment: process.env.TEST_ENVIRONMENT as any,
    region: "eu",
});

export const test_user_id = "test_user_1234";