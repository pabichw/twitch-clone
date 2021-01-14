import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getGameComplete,
  getGameError,
  getRecommendedChannelsComplete,
  getRecommendedChannelsError,
  getStreamTagsComplete,
  getStreamTagsError,
  getUserComplete,
  getUserError,
} from './actions';
import api from '../../utils/api';
import { apiConfig } from '../../config/apiConfig';
import { GET_GAME, GET_REC_CHANNEL, GET_STREAM_TAGS, GET_USER } from './types';

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

export function* getGameFlow({ payload: { onSuccess, id } }: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() => api.get(`${ROOT_URL}/games?id=${id}`));
    const game = data[0];
    yield put(getGameComplete(game));
    yield call(onSuccess(game));
  } catch (err) {
    yield put(getGameError(err));
  }
}

export function* getStreamTagsFlow({
  payload: { onSuccess, id },
}: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() => api.get(`${ROOT_URL}/streams/tags?id=${id}`));
    const streamTags = data;
    yield put(getStreamTagsComplete(streamTags));
    yield call(onSuccess(streamTags));
  } catch (err) {
    yield put(getStreamTagsError(err));
  }
}

export function* getRecommendedChannelsFlow({
  payload: { onSuccess },
}: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() => api.get(`${ROOT_URL}/streams`)); // because no recommended channels specific endpoint
    const channels = data;
    yield put(getRecommendedChannelsComplete(channels));
    yield call(onSuccess(channels));
  } catch (err) {
    yield put(getRecommendedChannelsError(err));
  }
}

export function* sideNavSaga() {
  yield takeEvery(GET_USER, getUserFlow);
  yield takeEvery(GET_GAME, getGameFlow);
  yield takeEvery(GET_STREAM_TAGS, getStreamTagsFlow);
  yield takeEvery(GET_REC_CHANNEL, getRecommendedChannelsFlow);
}
