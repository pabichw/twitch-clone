import React from 'react';
import styled from 'styled-components';

interface TwitchVideoEmbedProps {
  url: string;
}

const TwitchVideoEmbed: React.FC<TwitchVideoEmbedProps> = ({
  url,
}: TwitchVideoEmbedProps) => {
  return (
    <Container>
      <iframe
        title={`stream`}
        src={url}
        frameBorder="0"
        allowFullScreen={true}
        scrolling="no"
        height="100%"
        width="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
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

export default TwitchVideoEmbed;
