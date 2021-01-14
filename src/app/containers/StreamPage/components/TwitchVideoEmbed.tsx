import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { BUTTON } from '../../../../types/UITypes';
import CollapseSVG from '../../../__assets/CollapseSVG';

interface TwitchVideoEmbedProps {
  url: string;
  isChatCollapsed: boolean;
  onToggleChat: () => void;
}

const TwitchVideoEmbed: React.FC<TwitchVideoEmbedProps> = ({
  url,
  isChatCollapsed,
  onToggleChat,
}: TwitchVideoEmbedProps) => {
  return (
    <Container>
      <iframe
        title="stream"
        src={url}
        frameBorder="0"
        allowFullScreen={true}
        scrolling="no"
        height="100%"
        width="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      {isChatCollapsed && onToggleChat && (
        <CollapseWrapper>
          <Button
            type={BUTTON.TRANSPARENT}
            icon={<CollapseSVG />}
            onClick={onToggleChat}
          />
        </CollapseWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;
  height: 0;
  border-bottom: 1px solid var(--separator-color2);
`;

const CollapseWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  width: 40px;
`;

export default TwitchVideoEmbed;
