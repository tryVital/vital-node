import { testApiKeyClient } from "./arrange";

it('should return supported providers', async () => {
    const data = await testApiKeyClient.Providers.getSupportedProviders()
    expect(data.length).toBeGreaterThan(0)
})
