import React, { FunctionComponent, useEffect, useState } from 'react';
import { DummyStream, Game, Stream, StreamTag } from '../../../types/Twitch';
import styled from 'styled-components';
import { getImageOfSize } from '../../../utils/other';
import { fontSizes, fontWeights } from '../../../styles/themes';
import Chip from '../Chip';
import {
  LoadingPlaceholder,
  Placeholder,
} from '../Placeholders/LoadingPlaceholder';
import { Fade } from '@material-ui/core';
import { Clickable } from '../Clickable/Clickable';
import { MOBILE_BREAKPOINT } from '../../../styles/media';
import { useDispatch } from 'react-redux';
import { getGame, getStreamTags } from '../../../store/sidenav/actions';
import isEmpty from 'lodash/isEmpty';

type StreamThumbnailProps = {
  stream: Stream | DummyStream;
  loading: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  constraintWidth?: boolean;
  isDummy?: boolean;
};

const StreamThumbnail: FunctionComponent<StreamThumbnailProps> = ({
  stream,
  loading,
  onClick,
  constraintWidth,
  isDummy,
}) => {
  const [fade, setFade] = useState<boolean>(false);
  const [game, setGame] = useState<Game | null>(null);
  const [streamTags, setStreamTags] = useState<Array<StreamTag> | []>([]);

  const dispatch = useDispatch();

  useEffect(() => setFade(true), []);

  useEffect(() => {
    if (isDummy) {
      return;
    }
    dispatch(
      getGame({
        id: stream.game_id,
        onSuccess: game => {
          setGame(game);
        },
      }),
    );
  }, [dispatch, isDummy, stream.game_id]);

  useEffect(() => {
    if (isDummy) {
      return;
    }
    dispatch(
      getStreamTags({
        id: stream.user_id,
        onSuccess: tags => {
          setStreamTags(tags);
        },
      }),
    );
  }, [dispatch, isDummy, stream.game_id, stream.id, stream.user_id]);

  const gameLoaded = !!game;
  const streamTagsLoaded = !isEmpty(streamTags);
  console.log('streamTags', streamTags);

  return (
    <Fade in={fade}>
      <Container constraintWidth={!!constraintWidth} onClick={onClick}>
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
          {loading || !gameLoaded || !streamTagsLoaded ? (
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
                <Subtitle>{game!.name}</Subtitle>
              </Clickable>
              {!isEmpty(streamTags) && (
                <TagsContainer>
                  {/*
                    // @ts-ignore */}
                  {streamTags.map((tag: StreamTag) => (
                    <Chip
                      key={`chip-${tag.localization_names['en-us']}`}
                      text={tag.localization_names['en-us']}
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

type ContainerProps = {
  constraintWidth: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 5px;
  min-width: 300px;
  ${(props: ContainerProps) => props.constraintWidth && 'max-width: 300px;'};

  cursor: pointer;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    ${(props: ContainerProps) =>
      props.constraintWidth ? 'max-width: auto;' : 'min-width: 150px;'};
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
  flex-wrap: no-wrap;
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
