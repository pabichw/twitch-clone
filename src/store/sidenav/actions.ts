import {
  GET_USER,
  GET_USER_COMPLETE,
  GET_USER_ERROR,
  SideNavActionTypes,
} from './types';
import { APIError } from '../../types/Api';

export const getUser = ({ userId, onSuccess }): SideNavActionTypes => ({
  type: GET_USER,
  payload: { userId, onSuccess },
});

export const getUserComplete = (user): SideNavActionTypes => ({
  type: GET_USER_COMPLETE,
  payload: user,
});

export const getUserError = (error: APIError): SideNavActionTypes => ({
  type: GET_USER_ERROR,
  payload: error,
});
