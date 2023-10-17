export interface IAuthState {
  auth: IAuth | null;
  loading: boolean;
  isAppReady: boolean;
  isCompleted: boolean;
}

export enum RoleId {
  PATIENT = '37969a40-cf5d-434e-bd1d-9cd39e2096bd',
  THERAPIST = '1a279344-eea1-4a7e-86c5-a22793375d26',
}

export enum AgeCode {
  TEENAGE = 'T',
  ADULT = 'A',
}

export enum Gender {
  MALE = 'M',
  FEMALE = 'F',
  OTHER = 'O',
}

export enum Language {
  EN = 'en',
  TR = 'tr',
  AR = 'ar',
}

export interface IAuth {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  roleId: RoleId;
  iat: number;
  exp: number;
}

export class Auth2FARequested {
  public token2FA: string;
  public phoneNumber: string;
  constructor(token2FA: string, phoneNumber: string) {
    this.token2FA = token2FA;
    this.phoneNumber = phoneNumber;
  }
}

export interface ILoginEmailRequested {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginPhoneRequested {
  phoneNumber: string;
  password: string;
  rememberMe: boolean;
}

export interface IRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  policy: boolean;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  token2FA: string;
  phoneNumber: string;
}

export interface IPatient {
  userId?: string;
  ageCode?: AgeCode | null;
  gender?: Gender | null;
  countryCode?: string | null;
  languageCode?: Language | null;
}

export interface IActionForgotPasswordRequested {
  email?: string;
}

export interface IActionChangePasswordRecoveryRequested {
  email?: string;
  verificationCode: string;
  password: string;
}
export interface IForgotPasswordResponse {
  success: boolean;
}
