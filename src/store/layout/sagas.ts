import { takeEvery, select } from 'redux-saga/effects';
import { TOGGLE_SIDE_NAV } from './types';
import { selectIsSideNavCollapsed } from './selectors';
import { LS_KEYS } from '../../config/localStorageKeys';

function* toggleSideNavFlow() {
  const prevState = yield select(selectIsSideNavCollapsed);
  const newState = !prevState;
  newState
    ? localStorage.removeItem(LS_KEYS.IS_SIDE_NAV_COLLAPSED)
    : localStorage.setItem(LS_KEYS.IS_SIDE_NAV_COLLAPSED, 'true');
}

export function* layoutSaga() {
  yield takeEvery(TOGGLE_SIDE_NAV, toggleSideNavFlow);
}
