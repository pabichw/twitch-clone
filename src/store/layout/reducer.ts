import { TOGGLE_SIDE_NAV, LayoutActionTypes, LayoutStore } from './types';

const initialState: LayoutStore = {
  isSideNavCollapsed: false,
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
