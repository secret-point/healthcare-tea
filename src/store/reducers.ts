import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { reduxStorage } from '~Root/config/mmkv';
import loadingReducer from '~Root/services/loading/slice';
import authReducer from '~Root/services/auth/slice';
import themeReducer from '~Root/services/theme/slice';
import anxietyAssessmentReducer from '~Root/services/anxietyAssessment/slice';

const rootPersistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: ['authState', 'loadingState'],
};

const authPersistConfig = {
  key: 'authState',
  storage: reduxStorage,
  blacklist: ['loading', 'isAppReady', 'isLoggedIn'],
};

const loadingPersistConfig = {
  key: 'loadingState',
  storage: reduxStorage,
  blacklist: ['loadingState'],
};

const themePersistConfig = {
  key: 'themeState',
  storage: reduxStorage,
};

const anxietyAssesssmentPersistConfig = {
  key: 'anxietyAssessmentState',
  storage: reduxStorage,
};

const appReducer = combineReducers({
  loadingState: loadingReducer,
  authState: authReducer,
  themeState: themeReducer,
  anxietyAssessmentState: anxietyAssessmentReducer,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default persistReducer(
  {
    ...loadingPersistConfig,
    ...authPersistConfig,
    ...rootPersistConfig,
    ...themePersistConfig,
    ...anxietyAssesssmentPersistConfig,
  },
  rootReducer,
);
