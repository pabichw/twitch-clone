import {
  GET_BROADCASTER,
  GET_BROADCASTER_COMPLETE,
  GET_CHANNEL,
  GET_CHANNEL_COMPLETE,
  StreamPageActionTypes,
  StreamPageStore,
} from './types';

const initialState: StreamPageStore = {
  isLoading: false,
  stream: null,
  broadcaster: null,
};

// TODO: this should return StreamPageStore
export default (state = initialState, action: StreamPageActionTypes) => {
  switch (action.type) {
    case GET_CHANNEL:
      return { ...state, isLoading: true };
    case GET_CHANNEL_COMPLETE:
      return { ...state, isLoading: false, stream: action.payload };
    case GET_BROADCASTER:
      return { ...state, isLoading: true };
    case GET_BROADCASTER_COMPLETE:
      return { ...state, isLoading: false, broadcaster: action.payload };
    default:
      return state;
  }
};
