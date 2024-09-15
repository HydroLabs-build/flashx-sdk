import { API } from '../utils/api';

export class TradeService {
  private api: API;

  constructor(apiKey: string) {
    this.api = new API(apiKey);
  }

  public longShort(position: 'long' | 'short', token: string, amount: number) {
    const data = { position, token, amount };
    return this.api.post('/trade', data);
  }
}
