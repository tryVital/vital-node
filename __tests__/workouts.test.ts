import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";

describe('Workouts', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should return workout data', async (client: VitalClient) => {
        const data = await client.Workouts.get(
            test_user_id,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.workouts.length).toBeGreaterThan(0)
    });
})
