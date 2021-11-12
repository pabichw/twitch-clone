import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getGamesComplete,
  getGamesError,
  getStreamsComplete,
  getStreamsError,
} from './actions';
import twitchApi from '../../utils/api/twitch';
import { apiConfig } from '../../config/apiConfig';
import { GET_GAMES, GET_STREAMS } from './types';
import { LS_KEYS } from '../../config/localStorageKeys';

const { TWITCH_ROOT_URL } = apiConfig;

export function* getStreamsFlow() {
  try {
    const APP_TOKEN = localStorage.getItem(LS_KEYS.APP_TOKEN);
    const {
      data: { data },
    } = yield call(() =>
      twitchApi.get(`${TWITCH_ROOT_URL}/streams?token=${APP_TOKEN}`),
    );
    yield put(getStreamsComplete(data));
  } catch (err) {
    yield put(getStreamsError(err as string));
  }
}

export function* getGamesFlow() {
  try {
    const APP_TOKEN = localStorage.getItem(LS_KEYS.APP_TOKEN);
    const {
      data: { data },
    } = yield call(() =>
      twitchApi.get(`${TWITCH_ROOT_URL}/games/top?token=${APP_TOKEN}`),
    );
    yield put(getGamesComplete(data));
  } catch (err) {
    yield put(getGamesError(err as string));
  }
}

export function* homeSaga() {
  yield takeLatest(GET_STREAMS, getStreamsFlow);
  yield takeLatest(GET_GAMES, getGamesFlow);
}
