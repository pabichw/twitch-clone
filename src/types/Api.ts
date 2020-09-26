import { Stream } from './Twitch';

export type APIError = string;

export type ApiResponse = {
  data: object;
};

export type GetAppTokenResponse = ApiResponse;

export type GetStreamsResponse = ApiResponse & {
  data: Array<Stream>;
};

export type AppToken = string;
export type UserToken = string;
