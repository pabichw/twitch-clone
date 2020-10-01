import { GET_USER, SideNavActionTypes, SideNavStore } from './types';

const initialState: SideNavStore = {};

export default (state = initialState, action: SideNavActionTypes) => {
  switch (action.type) {
    case GET_USER:
      return state;
  }
  return state;
};
