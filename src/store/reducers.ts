import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth/reducer';
import home from './home/reducer';
import layout from './layout/reducer';
import sideNav from './sidenav/reducer';
import streamPage from './streamPage/reducer';
import searchPage from './searchPage/reducer';

export function createReducer() {
  return combineReducers({
    auth,
    home,
    streamPage,
    searchPage,
    layout,
    sideNav,
  });
}
