import { APIError, GetUserResponse } from '../../types/Api';

export const GET_USER = 'GET_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_USER_COMPLETE = 'GET_USER_COMPLETE';

export type SideNavStore = {};

interface GetUserAction {
  type: typeof GET_USER;
  payload: { userId: string; onSuccess: (User) => void }; // userId
}

interface GetUserCompleteAction {
  type: typeof GET_USER_COMPLETE;
  payload: GetUserResponse;
}

interface GetUserErrorAction {
  type: typeof GET_USER_ERROR;
  payload: APIError;
}

export type SideNavActionTypes =
  | GetUserAction
  | GetUserCompleteAction
  | GetUserErrorAction;
