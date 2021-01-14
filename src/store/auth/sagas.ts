import { call, put, takeLatest } from 'redux-saga/effects';
import { getAppTokenComplete, signInComplete, signInError } from './actions';
import { GET_APP_TOKEN, SIGN_IN } from './types';
import api from '../../utils/api';
import { apiConfig } from '../../config/apiConfig';

const { ROOT_URL } = apiConfig;

export function* signInFlow({ payload: signInCredentials }: ReturnType<any>) {
  try {
    console.log('signInCredentials', signInCredentials);
    // api call here
    yield put(signInComplete());
  } catch (err) {
    yield put(signInError(err));
  }
}

export function* getAppTokenFlow() {
  try {
    const { data } = yield call(() => api.get(`${ROOT_URL}/getAppAccessToken`));
    api.defaults.headers.common[
      'authorization'
    ] = `bearer ${data.access_token}`;
    localStorage.setItem('APP_TOKEN', data.access_token);
    yield put(getAppTokenComplete(data));
  } catch (err) {
    yield put(signInError(err));
  }
}

export function* authSaga() {
  yield takeLatest(SIGN_IN, signInFlow);
  yield takeLatest(GET_APP_TOKEN, getAppTokenFlow);
}
