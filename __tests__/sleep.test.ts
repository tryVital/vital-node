import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Sleep', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return sleep data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Sleep.get(
            userId,
            new Date("2021-01-01"),
            new Date("2022-12-01"),
        )
        expect(data.sleep.length).toBeGreaterThan(0)
    });

    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return sleep stream data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Sleep.getSleepWithStream(
            userId,
            new Date("2022-10-30"),
            new Date("2022-11-01"),
        )
        expect(data.sleep.length).toBeGreaterThan(0)
        expect(data.sleep[0].sleep_stream).toBeDefined()
    });
})
