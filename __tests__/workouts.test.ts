import { VitalClient } from "..";
import { testClient, testEuClient, getUserId, testApiKeyClient } from "./arrange";

describe('Workouts', () => {
    it.each([
        ["us", testClient],
        ["eu", testEuClient],
        ["us_api_key", testApiKeyClient],
    ])('should return workout data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Workouts.get(
            userId,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.workouts.length).toBeGreaterThan(0)
    });
})
