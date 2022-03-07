import { VitalClient } from "..";
import { testClient, testEuClient, getUserId } from "./arrange";


describe('Activity', () => {
    it.each([
        ["us", testClient],
        ["eu", testEuClient]
    ])('should return activity data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Activity.get(
            userId,
            new Date("2020-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.activity.length).toBeGreaterThan(0)
    });
})
