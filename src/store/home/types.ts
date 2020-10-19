import { APIError, GetStreamsResponse } from '../../types/Api';
import { Game, Stream } from '../../types/Twitch';

export const GET_STREAMS = 'GET_STREAMS';
export const GET_STREAMS_ERROR = 'GET_STREAMS_ERROR';
export const GET_STREAMS_COMPLETE = 'GET_STREAMS_COMPLETE';

export const GET_GAMES = 'GET_GAMES';
export const GET_GAMES_ERROR = 'GET_GAMES_ERROR';
export const GET_GAMES_COMPLETE = 'GET_GAMES_COMPLETE';

export type HomeStore = {
  isLoading: boolean;
  streams: Array<Stream>;
  games: Array<Game>;
};

interface GetStreamsAction {
  type: typeof GET_STREAMS;
}

interface GetStreamCompleteAction {
  type: typeof GET_STREAMS_COMPLETE;
  payload: GetStreamsResponse;
}

interface GetStreamErrorAction {
  type: typeof GET_STREAMS_ERROR;
  payload: APIError;
}

interface GetGamesAction {
  type: typeof GET_GAMES;
}

interface GetGamesCompleteAction {
  type: typeof GET_GAMES_COMPLETE;
  payload: GetStreamsResponse;
}

interface GetGamesErrorAction {
  type: typeof GET_GAMES_ERROR;
  payload: APIError;
}

export type HomeActionTypes =
  | GetStreamsAction
  | GetStreamCompleteAction
  | GetStreamErrorAction
  | GetGamesAction
  | GetGamesCompleteAction
  | GetGamesErrorAction;
