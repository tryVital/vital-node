import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";

describe('Devices', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should return device data', async (client: VitalClient) => {
        const data = await client.Devices.get_raw(
            test_user_id,
        )
        expect(data.devices.length).toBeGreaterThan(0)
    });
})
