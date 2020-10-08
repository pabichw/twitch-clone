import {
  GET_BROADCASTER,
  GET_BROADCASTER_COMPLETE,
  GET_BROADCASTER_ERROR,
  GET_CHANNEL,
  GET_CHANNEL_COMPLETE,
  GET_CHANNEL_ERROR,
  StreamPageActionTypes,
} from './types';
import { APIError } from '../../types/Api';

export const getChannel = ({ id }): StreamPageActionTypes => ({
  type: GET_CHANNEL,
  payload: id,
});

export const getChannelComplete = (stream): StreamPageActionTypes => ({
  type: GET_CHANNEL_COMPLETE,
  payload: stream,
});

export const getChannelError = (error: APIError): StreamPageActionTypes => ({
  type: GET_CHANNEL_ERROR,
  payload: error,
});

export const getBroadcaster = ({ login }): StreamPageActionTypes => ({
  type: GET_BROADCASTER,
  payload: login,
});

export const getBroadcasterComplete = (broadcaster): StreamPageActionTypes => ({
  type: GET_BROADCASTER_COMPLETE,
  payload: broadcaster,
});

export const getBroadcasterError = (
  error: APIError,
): StreamPageActionTypes => ({
  type: GET_BROADCASTER_ERROR,
  payload: error,
});
