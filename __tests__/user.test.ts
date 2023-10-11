import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId, randomString, test_user_id } from "./arrange";

describe('User', () => {
    const clientUserId = randomString(10);
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should create a user %p', async (region: string, client: VitalClient) => {
        const user = await client.User.create(
            clientUserId,
        )
        expect(user.client_user_id).toBe(clientUserId)
    });

    it.each([
        testEUClient,
        testUSClient,
    ])('should find a user', async (client: VitalClient) => {
        const user = await client.User.resolve(
            test_user_id,
        )
        expect(user.client_user_id).toBe(test_user_id)
    });

    it.each([
        testEUClient,
        testUSClient,
    ])('should create a sign-in token', async (client: VitalClient) => {
        const userId = await getUserId(client, clientUserId);
        const user = await client.User.createSignInToken(userId);
        expect(user.user_id).toBe(userId)
    });

    it.each([
        testEUClient,
        testUSClient,
    ])('should delete a user', async (client: VitalClient) => {
        const userToDelete = await getUserId(client, clientUserId);
        const user = await client.User.delete(
            userToDelete,
        )
        expect(user.success).toBe(true)
    });
})
