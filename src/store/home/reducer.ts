import {
  GET_STREAMS,
  GET_STREAMS_COMPLETE,
  HomeActionTypes,
  HomeStore,
} from './types';

const initialState: HomeStore = {
  isLoading: false,
  streams: [],
};

// TODO: this should return HomeStore
export default (state = initialState, action: HomeActionTypes) => {
  switch (action.type) {
    case GET_STREAMS:
      return { ...state, isLoading: true };
    case GET_STREAMS_COMPLETE:
      return { ...state, isLoading: false, streams: action.payload };
    default:
      return state;
  }
};
