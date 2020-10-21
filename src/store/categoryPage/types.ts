import {
  APIError,
  GetCategoryStreamsResponse,
  GetGameResponse,
} from '../../types/Api';
import { Game, Stream } from '../../types/Twitch';

export const GET_CATEGORY_STREAMS = 'GET_CATEGORY_STREAMS';
export const GET_CATEGORY_STREAMS_ERROR = 'GET_CATEGORY_STREAMS_ERROR';
export const GET_CATEGORY_STREAMS_COMPLETE = 'GET_CATEGORY_STREAMS_COMPLETE';

export const GET_GAME = 'GET_GAME_FOR_CATEGORY_PAGE';
export const GET_GAME_ERROR = 'GET_GAME_FOR_CATEGORY_PAGE_ERROR';
export const GET_GAME_COMPLETE = 'GET_GAME_FOR_CATEGORY_PAGE_COMPLETE';

export type CategoryPageStore = {
  isLoading: boolean;
  streams: Array<Stream> | [];
  game: Game | null;
};

interface GetCategoryStreamsAction {
  type: typeof GET_CATEGORY_STREAMS;
  payload: { catId: string };
}

interface GetCategoryStreamsCompleteAction {
  type: typeof GET_CATEGORY_STREAMS_COMPLETE;
  payload: GetCategoryStreamsResponse;
}

interface GetCategoryStreamsErrorAction {
  type: typeof GET_CATEGORY_STREAMS_ERROR;
  payload: APIError;
}

interface GetGameAction {
  type: typeof GET_GAME;
  payload: { catName: string };
}

interface GetGameCompleteAction {
  type: typeof GET_GAME_COMPLETE;
  payload: GetGameResponse;
}

interface GetGameErrorAction {
  type: typeof GET_GAME_ERROR;
  payload: APIError;
}

export type CategoryPageActionTypes =
  | GetCategoryStreamsAction
  | GetCategoryStreamsCompleteAction
  | GetCategoryStreamsErrorAction
  | GetGameAction
  | GetGameCompleteAction
  | GetGameErrorAction;
