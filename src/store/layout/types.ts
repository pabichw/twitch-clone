import { ReactNode } from 'react';

export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export const TOGGLE_POPUP = 'TOGGLE_POPUP';

export type LayoutStore = {
  isSideNavCollapsed: boolean;
  popup: {
    isVisible: boolean;
    content: string | ReactNode;
  };
};

interface toggleSideNav {
  type: typeof TOGGLE_SIDE_NAV;
  payload: boolean;
}

interface togglePopup {
  type: typeof TOGGLE_POPUP;
  payload: {
    isVisible: boolean;
    content: string | ReactNode;
  };
}

export type LayoutActionTypes = toggleSideNav | togglePopup;
