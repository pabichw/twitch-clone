import { SignInCredentials } from '../../types/Forms';
import {
  APIError,
  AppToken,
  GetAppTokenResponse,
  UserToken,
} from '../../types/Api';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_IN_COMPLETE = 'SIGN_IN_COMPLETE';

export const GET_APP_TOKEN = 'GET_APP_TOKEN';
export const GET_APP_TOKEN_ERROR = 'GET_APP_TOKEN_ERROR';
export const GET_APP_TOKEN_COMPLETE = 'GET_APP_TOKEN_COMPLETE';

export type AuthStore = {
  isLoading: boolean;
  isUserAuthenticated: boolean;
  isAppAuthenticated: boolean;
  appToken: AppToken;
  userToken: UserToken;
};

interface SignInAction {
  type: typeof SIGN_IN;
  payload: SignInCredentials;
}

interface SignInCompleteAction {
  type: typeof SIGN_IN_COMPLETE;
  payload: null;
}

interface SignInErrorAction {
  type: typeof SIGN_IN_ERROR;
  payload: APIError;
}

interface GetAppTokenAction {
  type: typeof GET_APP_TOKEN;
}

interface GetAppTokenCompleteAction {
  type: typeof GET_APP_TOKEN_COMPLETE;
  payload: GetAppTokenResponse;
}

interface GetAppTokenErrorAction {
  type: typeof GET_APP_TOKEN_ERROR;
  payload: APIError;
}

export type AuthActionTypes =
  | SignInAction
  | SignInCompleteAction
  | SignInErrorAction
  | GetAppTokenAction
  | GetAppTokenCompleteAction
  | GetAppTokenErrorAction;
