import React, { FunctionComponent, useEffect, useState } from 'react';
import { Game } from '../../../../types/Twitch';
import styled from 'styled-components';
import { getImageOfSize } from '../../../../utils/other';
import { fontSizes, fontWeights } from '../../../../styles/themes';
import {
  LoadingPlaceholder,
  Placeholder,
} from '../../../components/Placeholders/LoadingPlaceholder';
import { Fade } from '@material-ui/core';
import { Clickable } from '../../../components/Clickable/Clickable';

type GameThumbnailProps = {
  game: Game;
  loading: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const GameThumbnail: FunctionComponent<GameThumbnailProps> = ({
  game,
  loading,
  onClick,
}) => {
  const [fade, setFade] = useState<boolean>(false);
  // const [tags, setTags] = useState<Array<StreamTag> | []>([]); // Should be GameTag probably

  // const dispatch = useDispatch();

  useEffect(() => setFade(true), []);

  // useEffect(() => {
  //   dispatch(
  //     getStreamTags({
  //       id: game.user_id,
  //       onSuccess: tags => {
  //         setTags(tags);
  //       },
  //     }),
  //   );
  // }, [dispatch, stream.game_id, stream.id, stream.user_id]);

  // const tagsLoaded = !isEmpty(tags);
  // console.log('tags', tags);

  return (
    <Fade in={fade}>
      <Container onClick={onClick}>
        <Top>
          {loading ? (
            <LoadingPlaceholder type={Placeholder.VIDEO_FRAME} />
          ) : (
            <ThumbnailWrapper>
              <Thumbnail src={getImageOfSize(game.box_art_url, 188, 250)} />
            </ThumbnailWrapper>
          )}
        </Top>
        <Bottom>
          {loading ? (
            <LoadingPlaceholder type={Placeholder.GAME_THUMBNAIL} />
          ) : (
            <>
              <Clickable>
                <Title>{game.name}</Title>
              </Clickable>
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
  min-width: 140px;

  cursor: pointer;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
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

// const Subtitle = styled.p`
//   color: var(--font-secondary);
//   font-size: ${fontSizes.regular};
//   cursor: pointer;
//
//   &:hover {
//     color: var(--primary);
//   }
// `;
//
// const TagsContainer = styled.div`
//   display: flex;
//   flex-wrap: no-wrap;
// `;

const Top = styled.div`
  flex: 1;
`;

const Bottom = styled.div`
  display: block;
  height: 85px;
  margin-top: 10px;
`;

export default GameThumbnail;
