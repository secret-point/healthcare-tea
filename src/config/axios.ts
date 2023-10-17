import axios from 'axios';

import { store } from '~Root/store';
import { ENV } from '~Root/config/env';
import { storage } from '~Root/config/mmkv';
import { STORAGE_KEYS } from '~Root/config/constants';
import { QueryKey } from '@tanstack/query-core';
import { ErrorResponse } from '~Root/utils';
import { authActions } from '~Root/services/auth/slice';
import { Platform } from 'react-native';

const instance = axios.create({
  baseURL: ENV.API_URL,
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async config => {
    const token = storage.getString(STORAGE_KEYS.TOKEN);
    config.headers.os = Platform.OS;
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  resp => {
    return resp.data;
  },
  err => {
    if (!!err.response && !!err.response.data) {
      const errorResponse = new ErrorResponse(err.response.data);
      switch (errorResponse.status) {
        case 401:
          store.dispatch(authActions.logout());
          break;
      }

      return Promise.reject(errorResponse);
    }

    return Promise.reject(err);
  },
);

export const queryClientAxios = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}) => {
  return instance.get(queryKey.join('/').replace('//', '/'));
};

export default instance;
