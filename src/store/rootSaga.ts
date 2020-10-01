import { all } from 'redux-saga/effects';
import { authSaga } from './auth/sagas';
import { homeSaga } from './home/sagas';
import { layoutSaga } from './layout/sagas';
import { sideNavSaga } from './sidenav/sagas';

export default function* rootSaga() {
  yield all([authSaga(), homeSaga(), layoutSaga(), sideNavSaga()]);
}
