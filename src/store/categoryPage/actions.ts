import {
  CategoryPageActionTypes,
  GET_CATEGORY_STREAMS,
  GET_CATEGORY_STREAMS_COMPLETE,
  GET_CATEGORY_STREAMS_ERROR,
  GET_GAME,
  GET_GAME_COMPLETE,
  GET_GAME_ERROR,
} from './types';
import { APIError } from '../../types/Api';

export const getCategoryStreams = ({ catId }): CategoryPageActionTypes => ({
  type: GET_CATEGORY_STREAMS,
  payload: catId,
});

export const getCategoryStreamsComplete = (
  results,
): CategoryPageActionTypes => ({
  type: GET_CATEGORY_STREAMS_COMPLETE,
  payload: results,
});

export const getCategoryStreamsError = (
  error: APIError,
): CategoryPageActionTypes => ({
  type: GET_CATEGORY_STREAMS_ERROR,
  payload: error,
});

export const getGame = (payload): CategoryPageActionTypes => ({
  type: GET_GAME,
  payload,
});

export const getGameComplete = (results): CategoryPageActionTypes => ({
  type: GET_GAME_COMPLETE,
  payload: results,
});

export const getGameError = (error: APIError): CategoryPageActionTypes => ({
  type: GET_GAME_ERROR,
  payload: error,
});
