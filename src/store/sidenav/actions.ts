import {
  GET_GAME,
  GET_GAME_COMPLETE,
  GET_GAME_ERROR,
  GET_STREAM_TAGS,
  GET_STREAM_TAGS_COMPLETE,
  GET_STREAM_TAGS_ERROR,
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

export const getGame = ({ id, onSuccess }): SideNavActionTypes => ({
  type: GET_GAME,
  payload: { id, onSuccess },
});

export const getGameComplete = (game): SideNavActionTypes => ({
  type: GET_GAME_COMPLETE,
  payload: game,
});

export const getGameError = (error: APIError): SideNavActionTypes => ({
  type: GET_GAME_ERROR,
  payload: error,
});

export const getStreamTags = ({ id, onSuccess }): SideNavActionTypes => ({
  type: GET_STREAM_TAGS,
  payload: { id, onSuccess },
});

export const getStreamTagsComplete = (tags): SideNavActionTypes => ({
  type: GET_STREAM_TAGS_COMPLETE,
  payload: tags,
});

export const getStreamTagsError = (error: APIError): SideNavActionTypes => ({
  type: GET_STREAM_TAGS_ERROR,
  payload: error,
});
