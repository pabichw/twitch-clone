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

export type DummyStream = {
  title: string;
  thumbnail_url: string;
  user_name: string;
  game_id: string;
  tag_ids: Array<string>;
};

export type Video = {};
