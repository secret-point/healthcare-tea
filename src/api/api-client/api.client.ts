import { Language } from '../contracts';
import { ApiException, createException } from './api-exception';
import { QueryParam } from './query-params';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export class ApiClient {
  public constructUrl(path: string, queryParams: QueryParam[]): string {
    let url = `${ApiClientConfiguration.baseUrl}/${path}`;
    queryParams.forEach((param, index) => {
      const { name, value } = param;
      url += `${index ? '&' : '?'}${name}=${value}`;
    });
    return url;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (response.status >= 200 && response.status < 300) {
      return (await response.json()) as T;
    } else {
      let error: ApiException;
      try {
        const erorrResponse = (await response.json()) as ApiException;
        error = createException(erorrResponse);
      } catch (err) {
        error = createException();
      }
      if (error) {
        if (error.code) {
          if (ApiClientConfiguration.onError) {
            ApiClientConfiguration.onError(error.status, error);
          }
          throw createException({
            code: error.code,
            message: error.message,
            payload: error.payload,
          });
        }
      }
      throw createException();
    }
  }

  async callApiRaw(
    url: string,
    method: HttpMethod = 'GET',
    body: unknown = undefined,
    headers?: { [name: string]: string },
  ): Promise<Response> {
    const requestHeaders: { [name: string]: string } = headers || {
      'Content-Type': 'application/json',
    };
    const authToken = ApiClientConfiguration.getAuthToken();
    if (authToken) {
      requestHeaders.Authorization = authToken;
    }
    if (ApiClientConfiguration.language) {
      requestHeaders.lang = ApiClientConfiguration.language;
    }
    const response = await fetch(url, {
      method,
      headers: requestHeaders,
      body:
        typeof FormData !== 'undefined' && body instanceof FormData
          ? body
          : JSON.stringify(body),
    });
    return response;
  }

  async callApi<T>(
    url: string,
    method: HttpMethod = 'GET',
    body: unknown = undefined,
    headers?: { [name: string]: string },
  ): Promise<T> {
    const response = await this.callApiRaw(url, method, body, headers);
    return this.handleResponse<T>(response);
  }

  async get<T>(path: string, ...queryParams: QueryParam[]): Promise<T> {
    const url = this.constructUrl(path, queryParams);
    return await this.callApi(url);
  }

  async post<T, Q>(
    path: string,
    data: T,
    ...queryParams: QueryParam[]
  ): Promise<Q> {
    const url = this.constructUrl(path, queryParams);
    return await this.callApi<Q>(url, 'POST', data);
  }

  async upload<Q>(
    path: string,
    data: FormData,
    ...queryParams: QueryParam[]
  ): Promise<Q> {
    const url = this.constructUrl(path, queryParams);
    return await this.callApi<Q>(url, 'POST', data, {});
  }

  async patch<T, Q>(
    path: string,
    data: T,
    ...queryParams: QueryParam[]
  ): Promise<Q> {
    const url = this.constructUrl(path, queryParams);
    return await this.callApi<Q>(url, 'PATCH', data);
  }

  async put<T, Q>(
    path: string,
    data: T,
    ...queryParams: QueryParam[]
  ): Promise<Q> {
    const url = this.constructUrl(path, queryParams);
    return await this.callApi<Q>(url, 'PUT', data);
  }

  async delete<T>(path: string, ...queryParams: QueryParam[]) {
    const url = this.constructUrl(path, queryParams);
    return await this.callApi<T>(url, 'DELETE');
  }
}

type ApiClientConfigurationOptions = {
  getAuthToken: () => string | null;
  baseUrl: string;
  language: Language;
  onError?: (status: number, ex: ApiException) => void;
};
export const ApiClientConfiguration: ApiClientConfigurationOptions = {
  getAuthToken: () => {
    return null;
  },
  language: Language.en,
  baseUrl: '',
  onError: undefined,
};
