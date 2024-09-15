import { FlashXSDK } from '../src/flashx-sdk';

describe('FlashXSDK', () => {
  const sdk = new FlashXSDK({ apiKey: 'test_api_key' });

  it('should instantiate the SDK', () => {
    expect(sdk).toBeInstanceOf(FlashXSDK);
  });

  // Add more tests for each method
});
