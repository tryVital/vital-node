import { VitalClient } from "..";
import { testClient, testEuClient, getUserId } from "./arrange";

describe('Devices', () => {
    it.each([
        ["us", testClient],
        ["eu", testEuClient]
    ])('should return device data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Devices.get_raw(
            userId,
        )
        expect(data.devices.length).toBeGreaterThan(0)
    });
})
