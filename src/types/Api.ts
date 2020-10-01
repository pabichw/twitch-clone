import { Stream, User } from './Twitch';

export type APIError = string;

export type ApiResponse = {
  data: object;
};

export type GetAppTokenResponse = ApiResponse & {
  data: {
    access_token: string;
  };
};

export type GetStreamsResponse = ApiResponse & {
  data: Array<Stream>;
};

export type GetUserResponse = ApiResponse & {
  data: Array<User>;
};

export type AppToken = string;
export type UserToken = string;
