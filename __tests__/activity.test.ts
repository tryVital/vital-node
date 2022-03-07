import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";


describe('Activity', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should return activity data', async (client: VitalClient) => {
        const data = await client.Activity.get(
            test_user_id,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.activity.length).toBeGreaterThan(0)
    });
})
