import { API } from '../utils/api';

export class DataService {
  private api: API;

  constructor(apiKey: string) {
    this.api = new API(apiKey);
  }

  public getData(request: any) {
    // Call your API endpoint for data
    return this.api.post('/data', request);
  }
}
