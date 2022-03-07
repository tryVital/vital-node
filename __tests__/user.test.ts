import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";

describe('User', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should create a user', async (client: VitalClient) => {
        const user = await client.User.create(
            test_user_id,
        )
        expect(user.client_user_id).toBe(test_user_id)
    });

    it.each([
        testClient,
        // testEuClient
    ])('should find a user', async (client: VitalClient) => {
        const user = await client.User.resolve(
            test_user_id,
        )
        expect(user.client_user_id).toBe(test_user_id)
    });

    it.each([
        testClient,
        // testEuClient
    ])('should delete a user', async (client: VitalClient) => {
        const user = await client.User.delete(
            test_user_id,
        )
        expect(user.success).toBe(true)
    });
})
