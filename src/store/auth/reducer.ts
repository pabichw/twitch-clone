import {
  AuthStore,
  SIGN_IN,
  SIGN_IN_COMPLETE,
  AuthActionTypes,
  GET_APP_TOKEN_COMPLETE,
  GET_APP_TOKEN,
} from './types';

const initialState: AuthStore = {
  isLoading: false,
  isUserAuthenticated: false,
  isAppAuthenticated: false,
  appToken: '',
  userToken: '',
};

// TODO: this should return AuthStore
export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state };
    case SIGN_IN_COMPLETE:
      return { ...state, isUserAuthenticated: true };
    case GET_APP_TOKEN:
      return { ...state, isLoading: true };
    case GET_APP_TOKEN_COMPLETE:
      return {
        ...state,
        isLoading: false,
        isAppAuthenticated: true,
        appToken: action.payload,
      };
    default:
      return state;
  }
};
