import { VitalClient } from "..";
require('dotenv').config({
    path: '.env'
})

export const testClient = new VitalClient({
    client_id: process.env.TEST_CLIENT_ID,
    client_secret: process.env.TEST_CLIENT_SECRET,
    environment: process.env.TEST_ENVIRONMENT as any,
    region: "us",
});

export const testEuClient = new VitalClient({
    client_id: process.env.TEST_EU_CLIENT_ID,
    client_secret: process.env.TEST_EU_CLIENT_SECRET,
    environment: "development",
    region: "eu",
});

export const testApiKeyClient = new VitalClient({
    api_key: process.env.TEST_API_KEY,
    environment: process.env.TEST_ENVIRONMENT as any,
    region: "us",
});

export const test_user_id = "test_user_1234";

export const getUserId = async (client: VitalClient, user_id: string = test_user_id) => {
    const data = await client.User.resolve(user_id);
    return data.user_id;
}

export function randomString(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}