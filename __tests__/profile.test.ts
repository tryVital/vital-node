import { VitalClient } from "..";
import { testClient, testEuClient, getUserId, testApiKeyClient } from "./arrange";

describe('Profile', () => {
    it.each([
        ["us", testClient],
        ["eu", testEuClient],
        ["us_api_key", testApiKeyClient],
    ])('should return profile data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Profile.get(
            userId,
        )
        expect(data.user_id).toBe(userId)
    });
})
