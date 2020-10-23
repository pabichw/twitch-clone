import React, { useEffect, useState } from 'react';
import { Channel, Game, User } from '../../../../../types/Twitch';

import { useDispatch } from 'react-redux';
import { getGame, getUser } from '../../../../../store/sidenav/actions';
import { fontSizes, fontWeights } from '../../../../../styles/themes';
import { getImageOfSize } from '../../../../../utils/other';
import {
  LoadingPlaceholder,
  Placeholder,
} from '../../../../components/Placeholders/LoadingPlaceholder';
import styled from 'styled-components';

interface ChannelItemProps {
  content: Channel;
  minimized: boolean;
  onClick: () => void;
}

const ChannelItem: React.FC<ChannelItemProps> = ({
  content,
  minimized,
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [game, setGame] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(
      getUser({
        userId: content.user_id,
        onSuccess: user => {
          setUser(user);
          dispatch(
            getGame({
              id: content.game_id,
              onSuccess: game => {
                setGame(game);
                setIsLoading(false);
              },
            }),
          );
        },
      }),
    );
  }, [content, dispatch]);

  return (
    <Container onClick={onClick}>
      {isLoading ? (
        minimized ? (
          <LoadingPlaceholder type={Placeholder.SIDEBAR_ITEM_COLLAPSED} />
        ) : (
          <LoadingPlaceholder type={Placeholder.SIDEBAR_ITEM} />
        )
      ) : user ? (
        <Content user={user} game={game} collapsed={minimized} />
      ) : (
        ''
      )}
    </Container>
  );
};

const Container = styled.li`
  width: 100%;
  height: auto;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: var(--secondaryHover);
  }
`;

interface ContentProps {
  user: User | null;
  game: Game | null;
  collapsed?: boolean;
}

const Content: React.FC<ContentProps> = ({ user, game, collapsed }) => {
  const actualUser: any = user; // hack - because typings are fucked;
  const actualGame: any = game; // hack - because typings are fucked;
  return (
    <Row>
      <AvatarWrapper>
        <Avatar src={getImageOfSize(actualUser.profile_image_url, 70, 70)} />
      </AvatarWrapper>
      {!collapsed && (
        <TextContent ml="10px">
          <ChannelName>{actualUser.display_name}</ChannelName>
          <ChannelDesc>{actualGame.name}</ChannelDesc>
        </TextContent>
      )}
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface BoxProps {
  ml: string;
}

const TextContent = styled.div`
  display: block;
  margin-left: ${(props: BoxProps) => props.ml};
`;

const AvatarWrapper = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: var(--placeholder-bckg2);
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ChannelName = styled.p`
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.regular2};
  text-overflow: ellipsis;
  max-width: 178px;
  white-space: nowrap;
  overflow: hidden;
`;

const ChannelDesc = styled.p`
  color: var(--font-secondary);
  font-size: ${fontSizes.regular};
  line-height: 1.2em;
  text-overflow: ellipsis;
  max-width: 178px;
  white-space: nowrap;
  overflow: hidden;
`;

export default ChannelItem;
