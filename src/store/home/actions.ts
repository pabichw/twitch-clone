import {
  GET_GAMES,
  GET_GAMES_COMPLETE,
  GET_GAMES_ERROR,
  GET_STREAMS,
  GET_STREAMS_COMPLETE,
  GET_STREAMS_ERROR,
  HomeActionTypes,
} from './types';
import { APIError } from '../../types/Api';

export const getStreams = (): HomeActionTypes => ({
  type: GET_STREAMS,
});

export const getStreamsComplete = (streams): HomeActionTypes => ({
  type: GET_STREAMS_COMPLETE,
  payload: streams,
});

export const getStreamsError = (error: APIError): HomeActionTypes => ({
  type: GET_STREAMS_ERROR,
  payload: error,
});

export const getGames = (): HomeActionTypes => ({
  type: GET_GAMES,
});

export const getGamesComplete = (games): HomeActionTypes => ({
  type: GET_GAMES_COMPLETE,
  payload: games,
});

export const getGamesError = (error: APIError): HomeActionTypes => ({
  type: GET_GAMES_ERROR,
  payload: error,
});
