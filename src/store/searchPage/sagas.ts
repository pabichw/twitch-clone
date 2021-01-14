import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../utils/api';
import { apiConfig } from '../../config/apiConfig';
import { GET_SEARCH_RESULTS } from './types';
import { getSearchResultsComplete, getSearchResultsError } from './actions';

const { ROOT_URL } = apiConfig;

export function* getSearchResultsFlow({ payload: query }: ReturnType<any>) {
  try {
    const {
      data: { data },
    } = yield call(() => api.get(`${ROOT_URL}/search/channels?query=${query}`));
    const channels = data;
    yield put(getSearchResultsComplete(channels));
  } catch (err) {
    yield put(getSearchResultsError(err));
  }
}

export function* searchPageSaga() {
  yield takeLatest(GET_SEARCH_RESULTS, getSearchResultsFlow);
}
