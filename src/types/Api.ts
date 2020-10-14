import { Broadcaster, ChannelSearchResult, Stream, User } from './Twitch';

export type APIError = string;

export type ApiResponse = {
  data: object;
  //message: string;
};

export type GetAppTokenResponse = ApiResponse & {
  data: {
    access_token: string;
  };
};

export type GetStreamsResponse = ApiResponse & {
  data: Array<Stream>;
};

export type GetBroadcasterResponse = ApiResponse & {
  data: Array<Broadcaster>;
};

export type GetUserResponse = ApiResponse & {
  data: Array<User>;
};

export type GetSearchResultsResponse = ApiResponse & {
  data: Array<ChannelSearchResult>;
};

export type AppToken = string;
export type UserToken = string;
