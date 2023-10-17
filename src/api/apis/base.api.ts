import { ApiClient } from './../api-client/api.client';

export class BaseApi {
  protected client: ApiClient = new ApiClient();
}
