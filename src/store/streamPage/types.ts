import {
  APIError,
  GetBroadcasterResponse,
  GetStreamsResponse,
} from '../../types/Api';
import { Broadcaster, Stream } from '../../types/Twitch';

export const GET_CHANNEL = 'GET_STREAM_PAGE_CHANNEL';
export const GET_CHANNEL_ERROR = 'GET_STREAM_PAGE_CHANNEL_ERROR';
export const GET_CHANNEL_COMPLETE = 'GET_STREAM_PAGE_CHANNEL_COMPLETE';
export const GET_BROADCASTER = 'GET_STREAM_PAGE_BROADCASTER';
export const GET_BROADCASTER_ERROR = 'GET_STREAM_PAGE_BROADCASTER_ERROR';
export const GET_BROADCASTER_COMPLETE = 'GET_STREAM_PAGE_BROADCASTER_COMPLETE';

export type StreamPageStore = {
  isLoading: boolean;
  stream: Stream | null;
  broadcaster: Broadcaster | null;
};

interface GetChannelAction {
  type: typeof GET_CHANNEL;
  payload: { id: string };
}

interface GetChannelCompleteAction {
  type: typeof GET_CHANNEL_COMPLETE;
  payload: GetStreamsResponse;
}

interface GetChannelErrorAction {
  type: typeof GET_CHANNEL_ERROR;
  payload: APIError;
}

interface GetBroadcasterAction {
  type: typeof GET_BROADCASTER;
  payload: string;
}

interface GetBroadcasterCompleteAction {
  type: typeof GET_BROADCASTER_COMPLETE;
  payload: GetBroadcasterResponse;
}

interface GetBroadcasterErrorAction {
  type: typeof GET_BROADCASTER_ERROR;
  payload: APIError;
}

export type StreamPageActionTypes =
  | GetChannelAction
  | GetChannelCompleteAction
  | GetChannelErrorAction
  | GetBroadcasterAction
  | GetBroadcasterCompleteAction
  | GetBroadcasterErrorAction;
