import { VitalClient } from "..";
import { getUserId, testApiKeyClient, testClient, testEuClient } from "./arrange";

describe('Body', () => {
    it.each([
        ["us", testClient],
        ["eu", testEuClient],
        ["us_api_key", testApiKeyClient],
    ])('should return body data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Body.get(
            userId,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.body.length).toBeGreaterThan(0)
    });
})
