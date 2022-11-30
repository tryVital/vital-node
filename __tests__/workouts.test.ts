import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Workouts', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return workout data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Workouts.get(
            userId,
            new Date("2021-01-01"),
            new Date("2022-12-01"),
        )
        expect(data.workouts.length).toBeGreaterThan(0)
    });
})
