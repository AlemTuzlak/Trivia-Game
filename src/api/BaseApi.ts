import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
const apiPrefix = 'https://opentdb.com'

abstract class BaseApi {
  protected readonly instance: AxiosInstance;

  public constructor(config: AxiosRequestConfig = {baseURL: `${apiPrefix}/`}) {
    this.instance = axios.create(config);
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleGlobalResponseSuccess,
      this._handleGlobalResponseError,
    );
  };

  private _handleGlobalResponseSuccess = (response: AxiosResponse) => {
    return response;
  };

  private _handleGlobalResponseError = async (error: AxiosResponse) => {
    return Promise.reject(error);
  };
}

export { BaseApi, apiPrefix };
