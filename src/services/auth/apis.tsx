import jwtDecode from 'jwt-decode';
import {
  ILoginEmailRequested,
  ILoginPhoneRequested,
  ILoginResponse,
  IAuth,
  IRegisterRequest,
  IActionForgotPasswordRequested,
  IActionChangePasswordRecoveryRequested,
  IForgotPasswordResponse,
  Auth2FARequested,
} from './types';
import axios from '~Root/config/axios';
import { storage } from '~Root/config/mmkv';
import { STORAGE_KEYS } from '~Root/config/constants';

export const AuthApi = {
  parseUser(accessToken: string): IAuth | null {
    try {
      return jwtDecode(accessToken) || null;
    } catch (e) {}

    return null;
  },

  async loginByEmail(payload: ILoginEmailRequested): Promise<IAuth | null> {
    const { accessToken, refreshToken, token2FA, phoneNumber } =
      await axios.post<ILoginResponse>('/auth/login/email', {
        email: payload.email.toLowerCase(),
        password: payload.password,
      });
    if (!token2FA) {
      storage.set(STORAGE_KEYS.TOKEN, accessToken);
      storage.set(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
      storage.set(STORAGE_KEYS.REMEMBER_ME, payload.rememberMe);
      return AuthApi.parseUser(accessToken);
    } else {
      throw new Auth2FARequested(token2FA, phoneNumber);
    }
  },

  async loginByPhone(payload: ILoginPhoneRequested): Promise<IAuth | null> {
    const { accessToken, refreshToken, token2FA, phoneNumber } =
      await axios.post<ILoginResponse>('/auth/login/phone', {
        phoneNumber: payload.phoneNumber,
        password: payload.password,
      });

    if (!token2FA) {
      storage.set(STORAGE_KEYS.TOKEN, accessToken);
      storage.set(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
      storage.set(STORAGE_KEYS.REMEMBER_ME, payload.rememberMe);
      return AuthApi.parseUser(accessToken);
    } else {
      throw new Auth2FARequested(token2FA, phoneNumber);
    }
  },

  async verify2FA(token: string, code: string) {
    const { accessToken, refreshToken } = await axios.post<ILoginResponse>(
      '/auth/login/2fa',
      {
        token,
        code,
      },
    );
    storage.set(STORAGE_KEYS.TOKEN, accessToken);
    storage.set(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    return AuthApi.parseUser(accessToken);
  },
  async passwordRecovery(payload: IActionForgotPasswordRequested) {
    try {
      console.log('PAYLOAD', payload);
      const { success } = await axios.post<IForgotPasswordResponse>(
        '/auth/password-recovery/init',
        {
          email: payload.email,
        },
      );
      return success;
    } catch (e) {
      console.log(e);
      throw new Error('Cannot send recovery password request');
    }
  },
  async passwordRecoverySubmit(
    payload: IActionChangePasswordRecoveryRequested,
  ) {
    console.log('payload', {
      code: payload.verificationCode,
      password: payload.password,
      email: payload.email,
    });
    try {
      await axios.post<ILoginResponse>('/auth/password-recovery/submit', {
        code: payload.verificationCode,
        password: payload.password,
        email: payload.email,
      });
    } catch (e) {
      throw new Error('Cannot submit recovery password request');
    }
  },
  async patientRegister(payload: IRegisterRequest) {
    const { accessToken, refreshToken } = await axios.post<ILoginResponse>(
      '/patients/register',
      {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        password: payload.password,
      },
    );

    storage.set(STORAGE_KEYS.TOKEN, accessToken);
    storage.set(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

    return AuthApi.parseUser(accessToken);
  },
  async therapistRegister(payload: IRegisterRequest) {
    const { accessToken, refreshToken } = await axios.post<ILoginResponse>(
      '/therapists/register',
      {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        password: payload.password,
      },
    );

    storage.set(STORAGE_KEYS.TOKEN, accessToken);
    storage.set(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

    return AuthApi.parseUser(accessToken);
  },
  async check() {
    const accessToken = storage.getString(STORAGE_KEYS.TOKEN);
    if (!accessToken) {
      throw new Error('Not found accessToken');
    }
    if (!storage.getBoolean(STORAGE_KEYS.REMEMBER_ME)) {
      storage.delete(STORAGE_KEYS.TOKEN);
      storage.delete(STORAGE_KEYS.REFRESH_TOKEN);
    }
    return AuthApi.parseUser(accessToken);
  },

  async logout() {
    storage.delete(STORAGE_KEYS.TOKEN);
    storage.delete(STORAGE_KEYS.REFRESH_TOKEN);
    // @TODO: Maybe call API to logout
  },
};
