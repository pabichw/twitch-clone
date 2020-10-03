import React from 'react';

interface TwitchVideoEmbedProps {
  url: string;
}

const TwitchVideoEmbed: React.FC<TwitchVideoEmbedProps> = ({
  url,
}: TwitchVideoEmbedProps) => {
  return (
    <iframe
      title={`stream`}
      src={url}
      frameBorder="0"
      allowFullScreen={true}
      scrolling="no"
      height="378"
      width="620"
    />
  );
};

export default TwitchVideoEmbed;
