import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth/reducer';
import home from './home/reducer';

export function createReducer() {
  return combineReducers({
    auth,
    home,
  });
}
