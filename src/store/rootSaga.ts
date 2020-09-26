import { all } from 'redux-saga/effects';
import { authSaga } from './auth/sagas';
import { homeSaga } from './home/sagas';

export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}
