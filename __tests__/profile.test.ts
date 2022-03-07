import { VitalClient } from "..";
import { testClient, testEuClient, getUserId } from "./arrange";

describe('Profile', () => {
    it.each([
        ["us", testClient],
        ["eu", testEuClient]
    ])('should return profile data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Profile.get(
            userId,
        )
        expect(data.user_id).toBe(userId)
    });
})
