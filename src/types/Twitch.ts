import { Email } from './Other';

export type Stream = {
  id: string;
  user_id: string;
  user_name: string;
  game_id: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: Array<string>;
};

export type Channel = {
  id: string;
  user_id: string;
  user_name: string;
  game_id: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: Array<string>;
};

export type User = {
  id: string;
  user_id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: Number;
  email: Email;
};

export type Game = {
  id: string;
  box_art_url: string;
  name: string;
};

export type StreamTag = {
  tag_id: string;
  is_auto: boolean;
  localization_names: object;
  localization_descriptions: object;
};

export type Broadcaster = User;

export type DummyStream = {
  id: string;
  user_id: string;
  title: string;
  thumbnail_url: string;
  user_name: string;
  game_id: string;
  tag_ids: Array<string>;
};

export type Video = {};
