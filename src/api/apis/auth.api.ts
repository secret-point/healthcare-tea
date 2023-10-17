import { BaseApi } from './base.api';
import * as Contracts from '../contracts';

class AuthApiClass extends BaseApi {
  public async loginByEmail(
    email: string,
    password: string,
  ): Promise<Contracts.AuthData> {
    return this.client.post('auth/login/email', {
      email,
      password,
    });
  }
}

export const AuthApi = new AuthApiClass();
