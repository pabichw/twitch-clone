import {
  GET_STREAMS,
  GET_STREAMS_COMPLETE,
  GET_STREAMS_ERROR,
  HomeActionTypes,
} from './types';
import { APIError } from '../../types/Api';

export const getStreams = (): HomeActionTypes => ({
  type: GET_STREAMS,
});

export const getStreamsComplete = (streams): HomeActionTypes => ({
  type: GET_STREAMS_COMPLETE,
  payload: streams,
});

export const getStreamsError = (error: APIError): HomeActionTypes => ({
  type: GET_STREAMS_ERROR,
  payload: error,
});
