import axios from 'axios';

export class API {
  private apiKey: string;
  private baseURL: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.flashx.com'; // Replace with your API base URL
  }

  public async get(endpoint: string, params?: any) {
    return axios.get(`${this.baseURL}${endpoint}`, {
      headers: { Authorization: `Bearer ${this.apiKey}` },
      params,
    });
  }

  public async post(endpoint: string, data: any) {
    return axios.post(`${this.baseURL}${endpoint}`, data, {
      headers: { Authorization: `Bearer ${this.apiKey}` },
    });
  }

  // Implement other HTTP methods if needed
}
