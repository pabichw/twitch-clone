import React from 'react';
import styled from 'styled-components';
import ChannelItem from './components/ChannelItem';
import { Channel } from '../../../../types/Twitch';

interface ChannelsListProps {
  channels: Array<Channel>;
  collapsed: boolean;
}
export const ChannelsList: React.FC<ChannelsListProps> = ({
  channels,
  collapsed,
}) => {
  return (
    <List>
      {channels.map(ch => (
        <ChannelItem content={ch} minimized={collapsed} />
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
`;
