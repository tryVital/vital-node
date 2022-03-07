import { VitalClient } from "..";
import { getUserId, testClient, testEuClient } from "./arrange";

describe('Link', () => {
    it.each([
        ["us", testClient],
        ["eu", testEuClient]
    ])('should create a link token %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Link.create(
            userId,
        )
        expect(data.link_token).toBeDefined()
    });
})
