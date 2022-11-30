import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Profile', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return profile data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Profile.get(
            userId,
        )
        expect(data.user_id).toBe(userId)
    });
})
