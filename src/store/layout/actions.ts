import { LayoutActionTypes, TOGGLE_POPUP, TOGGLE_SIDE_NAV } from './types';

export const toggleSideNav = (open): LayoutActionTypes => ({
  type: TOGGLE_SIDE_NAV,
  payload: open,
});

export const togglePopup = ({ isVisible, content }): LayoutActionTypes => ({
  type: TOGGLE_POPUP,
  payload: { isVisible, content },
});
