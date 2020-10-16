import { TOGGLE_SIDE_NAV, LayoutActionTypes, LayoutStore } from './types';
import { LS_KEYS } from '../../config/localStorageKeys';
import get from 'lodash/get';

const initialState: LayoutStore = {
  isSideNavCollapsed: !!localStorage.getItem(LS_KEYS.IS_SIDE_NAV_COLLAPSED),
};

export default (
  state = initialState,
  action: LayoutActionTypes,
): LayoutStore => {
  switch (action.type) {
    case TOGGLE_SIDE_NAV:
      const open = get(action, 'payload');
      return {
        ...state,
        isSideNavCollapsed:
          typeof open === undefined ? !state.isSideNavCollapsed : open,
      };
    default:
      return state;
  }
};
