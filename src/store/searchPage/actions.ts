import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_COMPLETE,
  GET_SEARCH_RESULTS_ERROR,
  SearchPageActionTypes,
} from './types';
import { APIError } from '../../types/Api';

export const getSearchResults = ({ query }): SearchPageActionTypes => ({
  type: GET_SEARCH_RESULTS,
  payload: query,
});

export const getSearchResultsComplete = (results): SearchPageActionTypes => ({
  type: GET_SEARCH_RESULTS_COMPLETE,
  payload: results,
});

export const getSearchResultsError = (
  error: APIError,
): SearchPageActionTypes => ({
  type: GET_SEARCH_RESULTS_ERROR,
  payload: error,
});
