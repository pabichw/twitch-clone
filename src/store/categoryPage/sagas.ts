import { call, put, takeLatest } from 'redux-saga/effects';
import twitchApi from '../../utils/api/twitch';
import { apiConfig } from '../../config/apiConfig';
import { GET_CATEGORY_STREAMS, GET_GAME } from './types';
import {
  getCategoryStreamsComplete,
  getCategoryStreamsError,
  getGameComplete,
  getGameError,
} from './actions';

const { TWITCH_ROOT_URL } = apiConfig;

export function* getCategoryStreamsFlow({ payload: catId }: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() =>
      twitchApi.get(`${TWITCH_ROOT_URL}/streams?game_id=${catId}`),
    );
    yield put(getCategoryStreamsComplete(data));
  } catch (err) {
    yield put(getCategoryStreamsError(err as string));
  }
}

export function* getGameFlow({
  payload: { catName, onSuccess },
}: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() =>
      twitchApi.get(`${TWITCH_ROOT_URL}/games?name=${catName}`),
    );
    const game = data[0];
    yield put(getGameComplete(game));
    yield call(onSuccess(game));
  } catch (err) {
    yield put(getGameError(err as string));
  }
}

export function* categoryPageSaga() {
  yield takeLatest(GET_CATEGORY_STREAMS, getCategoryStreamsFlow);
  yield takeLatest(GET_GAME, getGameFlow);
}
