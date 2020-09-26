import {
  AuthStore,
  SIGN_IN,
  SIGN_IN_COMPLETE,
  AuthActionTypes,
  GET_APP_TOKEN_COMPLETE,
} from './types';

const initialState: AuthStore = {
  isLoading: false,
  isUserAuthenticated: false,
  isAppAuthenticated: false,
  appToken: '',
  userToken: '',
};

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isLoading: true };
    case SIGN_IN_COMPLETE:
      return { ...state, isUserAuthenticated: true, isLoading: false };
    case GET_APP_TOKEN_COMPLETE:
      return { ...state, isAppAuthenticated: true, appToken: action.payload };
    default:
      return state;
  }
};
