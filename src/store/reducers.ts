import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth/reducer';

export function createReducer() {
  return combineReducers({
    auth,
  });
}
