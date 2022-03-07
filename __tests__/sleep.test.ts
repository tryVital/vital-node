import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";

describe('Sleep', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should return sleep data', async (client: VitalClient) => {
        const data = await client.Sleep.get(
            test_user_id,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.sleep.length).toBeGreaterThan(0)
    });
})
