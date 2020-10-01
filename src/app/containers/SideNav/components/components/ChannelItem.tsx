import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Channel, User } from '../../../../../types/Twitch';

import { useDispatch } from 'react-redux';
import { getUser } from '../../../../../store/sidenav/actions';

interface ChannelItemProps {
  content: Channel;
  minimized: boolean;
}

const ChannelItem: React.FC<ChannelItemProps> = ({ content, minimized }) => {
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
    <Container>
      {!minimized
        ? isLoading
          ? 'Loading'
          : user
          ? ((user as unknown) as User).display_name
          : 'null'
        : null}
    </Container>
  );
};

const Container = styled.li`
  width: 100%;
  height: 42px;
`;

export default ChannelItem;
