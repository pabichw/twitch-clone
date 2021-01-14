import { RootState } from '../../types';

export const selectIsSideNavCollapsed = (state: RootState): boolean =>
  state.layout.isSideNavCollapsed;

export const selectIsPopup = (state: RootState): boolean =>
  state.layout.popup.isVisible;
