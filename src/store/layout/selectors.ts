import { RootState } from '../../types';

export const selectIsSideNavCollapsed = (state: RootState): boolean =>
  state.layout.isSideNavCollapsed;
