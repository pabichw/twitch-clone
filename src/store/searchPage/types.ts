import { APIError, GetSearchResultsResponse } from '../../types/Api';
import { ChannelSearchResult } from '../../types/Twitch';

export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
export const GET_SEARCH_RESULTS_ERROR = 'GET_SEARCH_RESULTS_ERROR';
export const GET_SEARCH_RESULTS_COMPLETE = 'GET_SEARCH_RESULTS_COMPLETE';

export type SearchPageStore = {
  isLoading: boolean;
  channels: Array<ChannelSearchResult>;
};

interface GetSearchResultsAction {
  type: typeof GET_SEARCH_RESULTS;
  payload: { query: string };
}

interface GetSearchResultsCompleteAction {
  type: typeof GET_SEARCH_RESULTS_COMPLETE;
  payload: GetSearchResultsResponse;
}

interface GetSearchResultsErrorAction {
  type: typeof GET_SEARCH_RESULTS_ERROR;
  payload: APIError;
}

export type SearchPageActionTypes =
  | GetSearchResultsAction
  | GetSearchResultsCompleteAction
  | GetSearchResultsErrorAction;
