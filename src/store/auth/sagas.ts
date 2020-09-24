import { put, takeLatest, delay } from 'redux-saga/effects';
import { signIn, signInComplete, signInError } from './actions';
import { SIGN_IN } from './types';

export function* signInFlow({
  payload: signInCredentials,
}: ReturnType<typeof signIn>) {
  yield delay(500);
  try {
    console.log('signInCredentials', signInCredentials);
    yield put(signInComplete());
  } catch (err) {
    yield put(signInError(err));
  }
}

export function* authSaga() {
  yield takeLatest(SIGN_IN, signInFlow);
}
