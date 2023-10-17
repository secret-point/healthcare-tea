import { all, call, put, takeEvery } from 'redux-saga/effects';

import { authActions } from './slice';
import { AuthApi } from '~Root/services/auth/apis';
import { IAuth } from '~Root/services/auth/types';
import { themeActions } from '~Root/services/theme/slice';
import { THEME } from '~Root/services/theme/colors';

function* initializeAuth() {
  try {
    const auth: IAuth = yield call(AuthApi.check);
    yield put(authActions.setAuth(auth));
  } catch (e) {
    console.error(e);
  } finally {
    yield put(authActions.initAuthSuccess());
  }
}

function* logout() {
  try {
    yield call(AuthApi.logout);
    yield put(themeActions.changeTheme(THEME.DEFAULT));
  } catch (e) {
    console.error(e);
  } finally {
    yield put(authActions.logoutSuccess());
  }
}

function* watchInitializeAuth() {
  yield takeEvery(authActions.initAuth.type, initializeAuth);
}

function* watchLogout() {
  yield takeEvery(authActions.logout.type, logout);
}

export default function* authWatchers() {
  yield all([watchInitializeAuth(), watchLogout()]);
}
