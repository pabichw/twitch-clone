import React, { FunctionComponent, useEffect, useState } from 'react';
import { DummyStream, Stream } from '../../../../types/Twitch';
import styled from 'styled-components';
import { getImageOfSize } from '../../../../utils/other';
import { fontSizes, fontWeights } from '../../../../styles/themes';
import Chip from '../../../components/Chip';
import {
  LoadingPlaceholder,
  Placeholder,
} from '../../../components/LoadingPlaceholder';
import { Fade } from '@material-ui/core';
import { Clickable } from '../../../components/Clickable/Clickable';
import { MOBILE_BREAKPOINT } from '../../../../styles/media';

type StreamThumbnailProps = {
  stream: Stream | DummyStream;
  loading: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const StreamThumbnail: FunctionComponent<StreamThumbnailProps> = ({
  stream,
  loading,
  onClick,
}) => {
  const [fade, setFade] = useState(false);
  useEffect(() => setFade(true), []);

  return (
    <Fade in={fade}>
      <Container onClick={onClick}>
        <Top>
          {loading ? (
            <LoadingPlaceholder type={Placeholder.VIDEO_FRAME} />
          ) : (
            <ThumbnailWrapper>
              <Thumbnail src={getImageOfSize(stream.thumbnail_url, 440, 248)} />
            </ThumbnailWrapper>
          )}
        </Top>
        <Bottom>
          {loading ? (
            <LoadingPlaceholder type={Placeholder.STREAM_BOTTOM} />
          ) : (
            <>
              <Clickable>
                <Title>{stream.title}</Title>
              </Clickable>
              <Clickable>
                <Subtitle>{stream.user_name}</Subtitle>
              </Clickable>
              <Clickable>
                <Subtitle>{stream.game_id}</Subtitle>
              </Clickable>
              {stream.tag_ids && (
                <TagsContainer>
                  {stream.tag_ids.map(tag => (
                    <Chip
                      key={`chip-${tag}`}
                      text={tag}
                      onClick={console.log}
                    />
                  ))}
                </TagsContainer>
              )}
            </>
          )}
        </Bottom>
      </Container>
    </Fade>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 5px;
  min-width: 300px;

  cursor: pointer;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    min-width: 150px;
  }
`;

const ThumbnailWrapper = styled.div`
  height: 100%;
  background: var(--placeholder);
  width: 100%;
  position: relative !important;
`;

const Thumbnail = styled.img`
  height: 100%;
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

const Subtitle = styled.p`
  color: var(--font-secondary);
  font-size: ${fontSizes.regular};
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`;

const TagsContainer = styled.div`
  display: flex;

  :first-child {
    margin-left: 0;
  }
`;

const Top = styled.div`
  flex: 1;
`;

const Bottom = styled.div`
  display: block;
  height: 85px;
  margin-top: 10px;
`;

export default StreamThumbnail;
