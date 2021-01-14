import {
  GET_GAMES,
  GET_GAMES_COMPLETE,
  GET_STREAMS,
  GET_STREAMS_COMPLETE,
  HomeActionTypes,
  HomeStore,
} from './types';

const initialState: HomeStore = {
  isLoading: false,
  streams: [],
  games: [],
};

// TODO: this should return HomeStore
export default (state = initialState, action: HomeActionTypes) => {
  switch (action.type) {
    case GET_STREAMS:
      return { ...state, isLoading: true };
    case GET_STREAMS_COMPLETE:
      return { ...state, isLoading: false, streams: action.payload };
    case GET_GAMES:
      return { ...state, isLoading: true };
    case GET_GAMES_COMPLETE:
      return { ...state, isLoading: false, games: action.payload };
    default:
      return state;
  }
};
