import { SignInCredentials } from '../../types/Forms';
import {
  AuthActionTypes,
  GET_APP_TOKEN,
  GET_APP_TOKEN_COMPLETE,
  GET_APP_TOKEN_ERROR,
  SIGN_IN,
  SIGN_IN_COMPLETE,
  SIGN_IN_ERROR,
} from './types';
import { APIError } from '../../types/Api';

export const signIn = (
  signInCredentials: SignInCredentials,
): AuthActionTypes => ({
  type: SIGN_IN,
  payload: signInCredentials,
});

export const signInComplete = (): AuthActionTypes => ({
  type: SIGN_IN_COMPLETE,
  payload: null,
});

export const signInError = (error: APIError): AuthActionTypes => ({
  type: SIGN_IN_ERROR,
  payload: error,
});

export const getAppToken = (): AuthActionTypes => ({
  type: GET_APP_TOKEN,
});

export const getAppTokenComplete = ({
  access_token: appToken,
}): AuthActionTypes => ({
  type: GET_APP_TOKEN_COMPLETE,
  payload: appToken,
});

export const getAppTokenError = (error: APIError): AuthActionTypes => ({
  type: GET_APP_TOKEN_ERROR,
  payload: error,
});
