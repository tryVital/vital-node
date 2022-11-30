import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Vitals', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return glucose data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Vitals.glucose(
            userId,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.length).toBeGreaterThan(0)
    });
})
