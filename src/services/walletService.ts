import { API } from '../utils/api';

export class WalletService {
  private api: API;

  constructor(apiKey: string) {
    this.api = new API(apiKey);
  }

  public transferToken(token: string, toAddress: string, amount: number) {
    const data = { token, toAddress, amount };
    return this.api.post('/transfer', data);
  }

  public mintNFT(nftContractAddress: string) {
    const data = { nftContractAddress };
    return this.api.post('/mint', data);
  }

  public interactWithWallet(action: string, params: any) {
    const data = { action, params };
    return this.api.post('/wallet/interact', data);
  }
}
