import * as ApiItems from './apis';
import * as ContractItems from './contracts';
import {
  ApiClient,
  ApiClientConfiguration as ApiClientConfigurationBase,
} from './api-client/api.client';

export { type ApiException } from './api-client/api-exception';

const apiClient = new ApiClient();

export { apiClient as ApiClient };

export const ApiClientConfiguration = ApiClientConfigurationBase;
export const Apis = ApiItems;
export const Contracts = ContractItems;
