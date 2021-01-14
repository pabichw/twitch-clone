import React from 'react';
import { ChannelSearchResult } from '../../../../../../types/Twitch';
import styled from 'styled-components';
import { fontSizes, fontWeights } from '../../../../../../styles/themes';
import LiveLabel from './components/LiveLabel';

interface ChannelsItemProps {
  ch: ChannelSearchResult;
  onHeaderClick: () => void;
  onMainImageClick: () => void;
}

const ChannelsListItem: React.FC<ChannelsItemProps> = ({
  ch,
  onHeaderClick,
  onMainImageClick,
}) => {
  return (
    <Content>
      <Left>
        <MainImageWrapper onClick={onMainImageClick}>
          <MainImage src={ch.thumbnail_url} />
        </MainImageWrapper>
        {ch.is_live && (
          <LiveLabelWrapper>
            <LiveLabel />
          </LiveLabelWrapper>
        )}
      </Left>
      <Right>
        <Header onClick={onHeaderClick}>{ch.display_name}</Header>
        <Desc>{ch.title}</Desc>
      </Right>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 217px;
  margin-top: 20px;
  position: relative;
`;

const MainImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid var(--separator-color2);
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

const LiveLabelWrapper = styled.div`
  position: absolute;
  bottom: -6px;
`;
const Right = styled.div`
  margin-top: 30px;
  width: 500px;
`;

const Header = styled.p`
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.big};

  cursor: pointer;

  &:hover {
    color: var(--primaryLight);
  }
`;

const Desc = styled.p`
  font-size: 13px;
  margin-top: 10px;
`;

export default ChannelsListItem;
