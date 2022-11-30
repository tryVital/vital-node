import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Vitals', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return heartrate data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Vitals.heartrate(
            userId,
            new Date("2022-10-01"),
            new Date("2022-11-01"),
        )
        expect(data.length).toBeGreaterThan(0)
    });
})
