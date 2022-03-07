import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";

describe('Body', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should return body data', async (client: VitalClient) => {
        const data = await client.Body.get(
            test_user_id,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.body.length).toBeGreaterThan(0)
    });
})
