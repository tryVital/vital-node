import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";

describe('Profile', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should return profile data', async (client: VitalClient) => {
        const data = await client.Profile.get(
            test_user_id,
        )
        expect(data.user_id).toBe(test_user_id)
    });
})
