import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserComplete, getUserError } from './actions';
import api from '../../utils/api';
import { apiConfig } from '../../config/apiConfig';
import { GET_USER } from './types';

const { ROOT_URL } = apiConfig;

export function* getUserFlow({
  payload: { onSuccess, userId },
}: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() => api.get(`${ROOT_URL}/users?id=${userId}`));
    const user = data[0];
    yield put(getUserComplete(user));
    yield call(onSuccess(user));
  } catch (err) {
    yield put(getUserError(err));
  }
}

export function* sideNavSaga() {
  yield takeEvery(GET_USER, getUserFlow);
}
