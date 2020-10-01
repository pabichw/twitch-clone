import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth/reducer';
import home from './home/reducer';
import layout from './layout/reducer';
import sideNav from './sidenav/reducer';

export function createReducer() {
  return combineReducers({
    auth,
    home,
    layout,
    sideNav,
  });
}
