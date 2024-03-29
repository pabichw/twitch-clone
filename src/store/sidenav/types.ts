import { APIError, GetChannelResponse } from '../../types/Api';
import { Channel, StreamTag } from '../../types/Twitch';

export const GET_USER = 'GET_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_USER_COMPLETE = 'GET_USER_COMPLETE';
export const GET_GAME = 'GET_GAME';
export const GET_GAME_ERROR = 'GET_GAME_ERROR';
export const GET_GAME_COMPLETE = 'GET_GAME_COMPLETE';
export const GET_STREAM_TAGS = 'GET_STREAM_TAGS';
export const GET_STREAM_TAGS_ERROR = 'GET_STREAM_TAGS_ERROR';
export const GET_STREAM_TAGS_COMPLETE = 'GET_STREAM_TAGS_COMPLETE';
export const GET_REC_CHANNEL = 'GET_SIDE_STREAM';
export const GET_REC_CHANNEL_ERROR = 'GET_SIDE_STREAM_ERROR';
export const GET_REC_CHANNEL_COMPLETE = 'GET_SIDE_STREAM_COMPLETE';

export type SideNavStore = {
  channels: Array<Channel>;
};

interface GetUserAction {
  type: typeof GET_USER;
  payload: { userId: string; onSuccess: (User) => void }; // userId
}

interface GetUserCompleteAction {
  type: typeof GET_USER_COMPLETE;
  payload: GetChannelResponse;
}

interface GetUserErrorAction {
  type: typeof GET_USER_ERROR;
  payload: APIError;
}

interface GetGameAction {
  type: typeof GET_GAME;
  payload: { id: string; onSuccess: (Game) => void };
}

interface GetGameCompleteAction {
  type: typeof GET_GAME_COMPLETE;
  payload: GetChannelResponse;
}

interface GetGameErrorAction {
  type: typeof GET_GAME_ERROR;
  payload: APIError;
}

interface GetStreamTagsAction {
  type: typeof GET_STREAM_TAGS;
  payload: {
    broadcaster_id: string;
    onSuccess: (tags: Array<StreamTag>) => void;
  };
}

interface GetStreamTagsCompleteAction {
  type: typeof GET_STREAM_TAGS_COMPLETE;
  payload: GetChannelResponse;
}

interface GetStreamTagsErrorAction {
  type: typeof GET_STREAM_TAGS_ERROR;
  payload: APIError;
}

interface GetRecommendedChannelsAction {
  type: typeof GET_REC_CHANNEL;
  payload: { onSuccess?: (tags: Array<Channel>) => void };
}

interface GetRecommendedChannelsCompleteAction {
  type: typeof GET_REC_CHANNEL_COMPLETE;
  payload: GetChannelResponse;
}

interface GetRecommendedChannelsErrorAction {
  type: typeof GET_REC_CHANNEL_ERROR;
  payload: APIError;
}

export type SideNavActionTypes =
  | GetUserAction
  | GetUserCompleteAction
  | GetUserErrorAction
  | GetGameAction
  | GetGameCompleteAction
  | GetGameErrorAction
  | GetStreamTagsAction
  | GetStreamTagsCompleteAction
  | GetStreamTagsErrorAction
  | GetRecommendedChannelsAction
  | GetRecommendedChannelsCompleteAction
  | GetRecommendedChannelsErrorAction;
