import { AuthStore, SIGN_IN, SIGN_IN_COMPLETE, AuthActionTypes } from './types';

const initialState: AuthStore = {
  isLoading: false,
  isAuthenticated: false,
};

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isLoading: true };
    case SIGN_IN_COMPLETE:
      return { ...state, isAuthenticated: true, isLoading: false };
    default:
      return state;
  }
};
