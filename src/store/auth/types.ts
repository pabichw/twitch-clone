import { SignInCredentials } from '../../types/Forms';
import { APIError } from '../../types/API';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_IN_COMPLETE = 'SIGN_IN_COMPLETE';

export type AuthStore = {
  isLoading: boolean;
  isAuthenticated: boolean;
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

export type AuthActionTypes =
  | SignInAction
  | SignInCompleteAction
  | SignInErrorAction;
