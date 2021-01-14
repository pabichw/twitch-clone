import React from 'react';
import { ChannelSearchResult } from '../../../../../types/Twitch';
import ChannelsListItem from './ChannelsListItem';
import isEmpty from 'lodash/isEmpty';

interface ChannelsListChannel {
  channels: Array<ChannelSearchResult>;
  onHeaderClick: (ch: ChannelSearchResult) => void;
  onMainImageClick: (ch: ChannelSearchResult) => void;
}

const ChannelsList: React.FC<ChannelsListChannel> = ({
  channels,
  onHeaderClick,
  onMainImageClick,
}) => {
  return (
    <>
      {isEmpty(channels)
        ? null
        : channels.map(ch => (
            <ChannelsListItem
              key={`ch-${ch.display_name}`}
              ch={ch}
              onHeaderClick={() => onHeaderClick(ch)}
              onMainImageClick={() => onMainImageClick(ch)}
            />
          ))}
    </>
  );
};

export default ChannelsList;
