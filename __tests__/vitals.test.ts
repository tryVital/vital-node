import { VitalClient } from "..";
import { testClient, test_user_id } from "./arrange";

describe('Vitals', () => {
    it.each([
        testClient,
        // testEuClient
    ])('should return glucose data', async (client: VitalClient) => {
        const data = await client.Vitals.glucose(
            test_user_id,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.length).toBeGreaterThan(0)
    });
})
