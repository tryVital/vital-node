import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Link', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should create a link token %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Link.create(
            userId,
        )
        expect(data.link_token).toBeDefined()
    });
})
