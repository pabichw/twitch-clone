import {
  GET_CATEGORY_STREAMS,
  GET_CATEGORY_STREAMS_COMPLETE,
  GET_GAME,
  GET_GAME_COMPLETE,
  CategoryPageActionTypes,
  CategoryPageStore,
} from './types';

const initialState: CategoryPageStore = {
  isLoading: false,
  streams: [],
  game: null,
};

export default (state = initialState, action: CategoryPageActionTypes) => {
  switch (action.type) {
    case GET_CATEGORY_STREAMS:
      return { ...state, isLoading: true };
    case GET_CATEGORY_STREAMS_COMPLETE:
      return { ...state, isLoading: false, streams: action.payload };
    case GET_GAME:
      return { ...state, isLoading: true };
    case GET_GAME_COMPLETE:
      return { ...state, isLoading: false, game: action.payload };
    default:
      return state;
  }
};
