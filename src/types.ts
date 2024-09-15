export interface SDKOptions {
  apiKey: string;
}

export interface DataRequest {
  type: string;
  [key: string]: any;
}

export interface DataResponse {
  [key: string]: any;
}
