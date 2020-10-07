import { call, put, takeLatest } from 'redux-saga/effects';
import { getStreamsComplete, getStreamsError } from './actions';
import api from '../../utils/api';
import { apiConfig } from '../../config/apiConfig';
import { GET_STREAMS } from './types';
import { LS_KEYS } from '../../config/localStorageKeys';

const { ROOT_URL } = apiConfig;

export function* getStreamsFlow() {
  try {
    const APP_TOKEN = localStorage.getItem(LS_KEYS.APP_TOKEN);
    const {
      data: { data },
    } = yield call(() => api.get(`${ROOT_URL}/streams?token=${APP_TOKEN}`));
    yield put(getStreamsComplete(data));
  } catch (err) {
    yield put(getStreamsError(err));
  }
}

export function* homeSaga() {
  yield takeLatest(GET_STREAMS, getStreamsFlow);
}
