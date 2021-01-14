import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_COMPLETE,
  SearchPageActionTypes,
  SearchPageStore,
} from './types';

const initialState: SearchPageStore = {
  isLoading: false,
  channels: [],
};

export default (state = initialState, action: SearchPageActionTypes) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return { ...state, isLoading: true };
    case GET_SEARCH_RESULTS_COMPLETE:
      return { ...state, isLoading: false, channels: action.payload };
    default:
      return state;
  }
};
