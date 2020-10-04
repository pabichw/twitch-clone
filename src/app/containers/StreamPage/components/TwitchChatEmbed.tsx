import React from 'react';
import styled from 'styled-components';

interface TwitchChatEmbedProps {
  url: string;
}

const TwitchChatEmbed: React.FC<TwitchChatEmbedProps> = ({
  url,
}: TwitchChatEmbedProps) => {
  return (
    <Container>
      <iframe src={url} height="100%" width="100%" />
    </Container>
  );
};

const Container = styled.div`
  width: 340px;
  border-left: 1px solid var(--separator-color2);
  height: calc(100vh - 50px);
  overflow-y: hidden;
`;

export default TwitchChatEmbed;
