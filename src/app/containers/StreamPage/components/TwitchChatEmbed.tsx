import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { BUTTON } from '../../../../types/UITypes';
import CollapseSVG from '../../../__assets/CollapseSVG';

interface TwitchChatEmbedProps {
  url: string;
  onToggle: () => void;
}

const TwitchChatEmbed: React.FC<TwitchChatEmbedProps> = ({
  url,
  onToggle,
}: TwitchChatEmbedProps) => {
  return (
    <Container>
      <iframe title="stream-chat" src={url} height="100%" width="100%" />
      {onToggle && (
        <CollapseWrapper>
          <Button
            type={BUTTON.TRANSPARENT}
            icon={<CollapseSVG />}
            onClick={onToggle}
          />
        </CollapseWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 340px;
  border-left: 1px solid var(--separator-color2);
  height: calc(100vh - 50px);
  overflow-y: hidden;
`;

const CollapseWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  transform: scale(0.75) rotateZ(180deg);
`;

export default TwitchChatEmbed;
