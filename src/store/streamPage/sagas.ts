import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getBroadcasterComplete,
  getBroadcasterError,
  getChannel,
  getChannelComplete,
  getChannelError,
} from './actions';
import twitchApi from '../../utils/api/twitch';
import { apiConfig } from '../../config/apiConfig';
import { GET_BROADCASTER, GET_CHANNEL } from './types';

const { TWITCH_ROOT_URL } = apiConfig;

export function* getChannelFlow({ payload: broadcasterId }: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() =>
      twitchApi.get(
        `${TWITCH_ROOT_URL}/channels?broadcaster_id=${broadcasterId}`,
      ),
    );
    const channel = data[0];
    yield put(getChannelComplete(channel));
  } catch (err) {
    yield put(getChannelError(err as string));
  }
}

export function* getBroadcasterFlow({ payload: login }: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() =>
      twitchApi.get(`${TWITCH_ROOT_URL}/users?login=${login}`),
    );
    const broadcaster = data[0];
    yield put(getBroadcasterComplete(broadcaster));
    yield put(getChannel({ id: broadcaster.id }));
  } catch (err) {
    yield put(getBroadcasterError(err as string));
  }
}

export function* streamPageSaga() {
  yield takeLatest(GET_CHANNEL, getChannelFlow);
  yield takeLatest(GET_BROADCASTER, getBroadcasterFlow);
}
