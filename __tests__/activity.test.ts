import { VitalClient } from "..";
import { testUSClient, testEUClient, getUserId } from "./arrange";


describe('Activity', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return activity data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Activity.get(
            userId,
            new Date("2020-01-01"),
            new Date("2022-12-01"),
        )
        expect(data.activity.length).toBeGreaterThan(0)
    });
})
