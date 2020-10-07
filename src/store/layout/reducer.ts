import { TOGGLE_SIDE_NAV, LayoutActionTypes, LayoutStore } from './types';
import { LS_KEYS } from '../../config/localStorageKeys';

const initialState: LayoutStore = {
  isSideNavCollapsed: !!localStorage.getItem(LS_KEYS.IS_SIDE_NAV_COLLAPSED),
};

export default (
  state = initialState,
  action: LayoutActionTypes,
): LayoutStore => {
  switch (action.type) {
    case TOGGLE_SIDE_NAV:
      return {
        ...state,
        isSideNavCollapsed: !state.isSideNavCollapsed,
      };
    default:
      return state;
  }
};
