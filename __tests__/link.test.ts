import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";

describe('Link', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should create a link token', async (client: VitalClient) => {
        const data = await client.Link.create(
            test_user_id,
        )
        expect(data.link_token).toBeDefined()
    });
})
