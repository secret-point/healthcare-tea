import Toast from 'react-native-toast-message';
import { ToastShowParams } from 'react-native-toast-message/lib/src/types';

export const showError = (params?: Omit<ToastShowParams, 'type'>) => {
  Toast.show({
    type: 'error',
    ...params,
  });
};

export const showSuccess = (params?: Omit<ToastShowParams, 'type'>) => {
  Toast.show({
    type: 'success',
    ...params,
  });
};

export const showInfo = (params?: Omit<ToastShowParams, 'type'>) => {
  Toast.show({
    type: 'info',
    ...params,
  });
};
