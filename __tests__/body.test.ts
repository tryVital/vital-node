import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Body', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return body data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Body.get(
            userId,
            new Date("2021-01-01"),
            new Date("2022-12-01"),
        )
        expect(data.body.length).toBeGreaterThan(0)
    });
})
