import { APIError, GetAppTokenResponse } from '../../types/Api';
import { Stream } from '../../types/Twitch';

export const GET_STREAMS = 'GET_STREAMS';
export const GET_STREAMS_ERROR = 'GET_STREAMS_ERROR';
export const GET_STREAMS_COMPLETE = 'GET_STREAMS_COMPLETE';

export type HomeStore = {
  isLoading: boolean;
  streams: Array<Stream>;
};

interface GetStreamsAction {
  type: typeof GET_STREAMS;
}

interface GetStreamCompleteAction {
  type: typeof GET_STREAMS_COMPLETE;
  payload: GetAppTokenResponse;
}

interface GetStreamErrorAction {
  type: typeof GET_STREAMS_ERROR;
  payload: APIError;
}

export type HomeActionTypes =
  | GetStreamsAction
  | GetStreamCompleteAction
  | GetStreamErrorAction;
