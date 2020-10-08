import React from 'react';
import styled from 'styled-components';
import { Broadcaster, Stream } from '../../../../types/Twitch';
import { fontSizes, fontWeights } from '../../../../styles/themes';

interface BroadcasterInfoProps {
  broadcaster: Broadcaster;
  stream: Stream;
}

const BroadcasterInfo: React.FC<BroadcasterInfoProps> = ({
  broadcaster,
  stream,
}) => {
  return (
    <Container>
      <Left>
        <AvatarWrapper>
          <Avatar src={broadcaster.profile_image_url} />
        </AvatarWrapper>
      </Left>
      <Right>
        <HeaderRow>
          <Title>{broadcaster.display_name}</Title>
          <ButtonsWrapper />
        </HeaderRow>
        <DescBody>
          <DescriptionContainer>
            <Subtitle>{stream.title}</Subtitle>
            <HighlightedSubtitle>{stream.game_id}</HighlightedSubtitle>
          </DescriptionContainer>
        </DescBody>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Left = styled.div`
  height: 80px;
  width: 72px;
`;

const AvatarWrapper = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  position: relative;
  margin: auto;
  top: 8px;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -4px;
    left: -4px;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: linear-gradient(to top, #fff, var(--primary) 24%);
  }
`;

const Avatar = styled.img`
  height: 100%;
  width: auto;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Right = styled.div`
  flex-grow: 1;
  padding: 0 10px;
`;

const HeaderRow = styled.div`
  display: flex;
  height: 34px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const ButtonsWrapper = styled.div``;

const Title = styled.p`
  font-size: ${fontSizes.big};
  font-weight: ${fontWeights.bold};
`;

const DescBody = styled.div``;

const DescriptionContainer = styled.div``;

const Subtitle = styled.p`
  font-size: ${fontSizes.regular2};
  font-weight: ${fontWeights.bold};
  margin-top: 5px;
  line-height: 10px;
`;

const HighlightedSubtitle = styled.a`
  color: var(--primary);
  font-size: 13px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export default BroadcasterInfo;
