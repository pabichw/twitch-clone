import { SignInCredentials } from '../../types/Forms';
import {
  AuthActionTypes,
  SIGN_IN,
  SIGN_IN_COMPLETE,
  SIGN_IN_ERROR,
} from './types';
import { APIError } from '../../types/API';

export const signIn = (
  signInCredentials: SignInCredentials,
): AuthActionTypes => {
  return {
    type: SIGN_IN,
    payload: signInCredentials,
  };
};

export const signInComplete = (): AuthActionTypes => {
  return {
    type: SIGN_IN_COMPLETE,
    payload: null,
  };
};

export const signInError = (error: APIError): AuthActionTypes => {
  return {
    type: SIGN_IN_ERROR,
    payload: error,
  };
};
