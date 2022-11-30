import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Devices', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return device data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Devices.get_raw(
            userId,
        )
        expect(data.devices.length).toBeGreaterThan(0)
    });
})
