import { testUSClient } from "./arrange";

it('should return supported providers', async () => {
    const data = await testUSClient.Providers.getSupportedProviders()
    expect(data.length).toBeGreaterThan(0)
})
