import React, { useEffect, useState } from 'react';
import { Channel, User } from '../../../../../types/Twitch';

import { useDispatch } from 'react-redux';
import { getUser } from '../../../../../store/sidenav/actions';
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

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(
      getUser({
        userId: content.user_id,
        onSuccess: user => {
          setUser(user);
          setIsLoading(false);
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
        <Content user={user} collapsed={minimized} />
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
  collapsed?: boolean;
}

const Content: React.FC<ContentProps> = ({ user, collapsed }) => {
  const actualUser: any = user; // hack - because typings are fucked;
  return (
    <Row>
      <AvatarWrapper>
        <Avatar src={getImageOfSize(actualUser.profile_image_url, 70, 70)} />
      </AvatarWrapper>
      {!collapsed && (
        <Box ml="10px">
          <ChannelName>{actualUser.display_name}</ChannelName>
          <ChannelDesc>{actualUser.display_name}</ChannelDesc>
        </Box>
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

const Box = styled.div`
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
`;

const ChannelDesc = styled.p`
  color: var(--font-secondary);
  font-size: ${fontSizes.regular};
  line-height: 1.2em;
`;

export default ChannelItem;
