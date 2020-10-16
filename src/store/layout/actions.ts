import { TOGGLE_SIDE_NAV, LayoutActionTypes } from './types';

export const toggleSideNav = (open): LayoutActionTypes => ({
  type: TOGGLE_SIDE_NAV,
  payload: open,
});
