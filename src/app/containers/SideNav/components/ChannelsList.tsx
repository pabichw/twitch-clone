import React from 'react';
import styled from 'styled-components';
import ChannelItem from './components/ChannelItem';
import { Channel } from '../../../../types/Twitch';
import CameraSvg from '../../../__assets/CameraSvg';
import { MOCKS } from '../../../__tests__/mocks';

interface ChannelsListProps {
  channels: Array<Channel>;
  collapsed: boolean;
  isMobile: Boolean;
  onChannelClick: (ch: Channel) => void;
}

export const ChannelsList: React.FC<ChannelsListProps> = ({
  channels,
  collapsed,
  isMobile,
  onChannelClick,
}) => {
  return (
    <List mt={collapsed && !isMobile ? '50px' : isMobile ? '2px' : '0px'}>
      {collapsed && (
        <CameraIconWrap>
          <CameraSvg />
        </CameraIconWrap>
      )}
      {(channels || MOCKS.STREAMS).map(ch => (
        <ChannelItem
          content={ch}
          minimized={collapsed}
          onClick={() => onChannelClick(ch)}
        />
      ))}
    </List>
  );
};

interface ListProps {
  mt: string;
}

const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-top: ${(props: ListProps) => props.mt};
`;

const CameraIconWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 10px;
`;
