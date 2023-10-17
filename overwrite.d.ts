import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    routeParams?: {
      id: number;
    };
  }

  export interface AxiosInstance {
    request<T = any, D = any>(config: AxiosRequestConfig<D>): Promise<T>;
    get<T = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    delete<T = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    head<T = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    post<T = any, D = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    put<T = any, D = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    patch<T = any, D = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<D>,
    ): Promise<T>;
  }
}
