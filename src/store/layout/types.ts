export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';

export type LayoutStore = {
  isSideNavCollapsed: boolean;
};

interface toggleSideNav {
  type: typeof TOGGLE_SIDE_NAV;
}

export type LayoutActionTypes = toggleSideNav;
