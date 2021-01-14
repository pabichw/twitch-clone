import {
  TOGGLE_SIDE_NAV,
  LayoutActionTypes,
  LayoutStore,
  TOGGLE_POPUP,
} from './types';
import { LS_KEYS } from '../../config/localStorageKeys';
import get from 'lodash/get';

const initialState: LayoutStore = {
  isSideNavCollapsed: !!localStorage.getItem(LS_KEYS.IS_SIDE_NAV_COLLAPSED),
  popup: { isVisible: false, content: null },
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
          typeof open === 'undefined' ? !state.isSideNavCollapsed : open,
      };
    case TOGGLE_POPUP:
      const openPopup = get(action, 'payload.isVisible');
      const contentPopup = get(action, 'payload.content');
      return {
        ...state,
        popup: {
          isVisible:
            typeof openPopup === 'undefined'
              ? !state.popup.isVisible
              : openPopup,
          content: contentPopup,
        },
      };
    default:
      return state;
  }
};
