import { API } from '../utils/api';

export class SwapService {
  private api: API;

  constructor(apiKey: string) {
    this.api = new API(apiKey);
  }

  public swap(fromToken: string, toToken: string, amount: number) {
    // Implement swap logic with user confirmation
    const data = { fromToken, toToken, amount };
    return this.api.post('/swap', data);
  }
}
