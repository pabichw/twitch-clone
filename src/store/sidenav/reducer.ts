import {
  GET_REC_CHANNEL_COMPLETE,
  SideNavActionTypes,
  SideNavStore,
} from './types';

const initialState: SideNavStore = {
  channels: [],
};

export default (state = initialState, action: SideNavActionTypes) => {
  switch (action.type) {
    case GET_REC_CHANNEL_COMPLETE:
      return { ...state, channels: action.payload };
  }
  return state;
};
