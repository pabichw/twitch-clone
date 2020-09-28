import React, { FunctionComponent } from 'react';
import { Stream } from '../../../../types/Twitch';
import styled from 'styled-components';
import { imageWithDimensions } from '../../../../utils/other';
import { fontSizes, fontWeights } from '../../../../styles/themes';

type StreamThumbnailProps = {
  stream: Stream;
};

const StreamThumbnail: FunctionComponent<StreamThumbnailProps> = ({
  stream,
}) => (
  <Container>
    <Top>
      <Thumbnail src={imageWithDimensions(stream.thumbnail_url, 440, 248)} />
    </Top>
    <Bottom>
      <Title>{stream.title}</Title>
    </Bottom>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  min-width: 300px;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }
`;

const Thumbnail = styled.img`
  height: auto;
  width: 100%;
`;

const Title = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${fontSizes.regular2};
  font-weight: ${fontWeights.bold};
  margin-bottom: 3px;
  line-height: 18px;
`;

const Top = styled.div``;

const Bottom = styled.div`
  display: block;
  height: 85px;
  margin-top: 10px;
`;

export default StreamThumbnail;
