import { all } from 'redux-saga/effects';
import { authSaga } from './auth/sagas';
import { homeSaga } from './home/sagas';
import { streamPageSaga } from './streamPage/sagas';
import { layoutSaga } from './layout/sagas';
import { sideNavSaga } from './sidenav/sagas';
import { searchPageSaga } from './searchPage/sagas';
import { categoryPageSaga } from './categoryPage/sagas';

export default function* rootSaga() {
  yield all([
    authSaga(),
    homeSaga(),
    layoutSaga(),
    sideNavSaga(),
    categoryPageSaga(),
    streamPageSaga(),
    searchPageSaga(),
  ]);
}
