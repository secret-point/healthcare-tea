import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '~Root/store';
import { IAuth, IAuthState } from './types';

export const initialState: IAuthState = {
  loading: true,
  auth: null,
  isAppReady: false,
  isCompleted: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuth | null>) => {
      const auth = action.payload;
      if (auth) {
        auth.fullName = `${auth.firstName} ${auth.lastName}`;
      }

      state.auth = auth;
    },
    initAuth: state => {
      state.loading = true;
    },
    initAuthSuccess: state => {
      state.isAppReady = true;
      state.loading = false;
    },
    logout: state => {
      state.loading = true;
    },
    logoutSuccess: state => {
      state.auth = null;
      state.loading = false;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

export const selectAuthState = (state: RootState) => state.authState;

export const selectAuth = (state: RootState) => state.authState.auth!;

// Reducer
const authReducer = authSlice.reducer;

export default authReducer;
