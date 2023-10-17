import { all, fork } from 'redux-saga/effects';

import authWatchers from '~Root/services/auth/sagas';

export default function* rootSaga() {
  yield all([fork(authWatchers)]);
}
