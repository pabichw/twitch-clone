import numeral from 'numeral';
import React from 'react';
import styled from 'styled-components';
import { fontSizes } from 'styles/themes';
import { User, Game } from 'types/Twitch';

interface ITooltipContentProps {
  user: User;
  game: Game | null;
}
const TooltipContent: React.FC<ITooltipContentProps> = ({ user, game }) => (
  <Wrapper>
    <Header>
      {user.display_name} · {game?.name}
    </Header>
    <Description>{user.description}</Description>
    <Footer>
      <LiveDot />
      <FooterText>{`Live | ${numeral(user.view_count)
        .format('0.0a')
        .toUpperCase()} views`}</FooterText>
    </Footer>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 200px;
`;

const Header = styled.p`
  color: var(--primaryLight);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${fontSizes.regular2};
`;

const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${fontSizes.regular2};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
`;

const LiveDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--live-bckg);
  padding-top: 1px;
  margin-right: 5px;
`;

const FooterText = styled.p`
  color: var(--font-secondary);
  font-size: ${fontSizes.regular2};
`;

export default TooltipContent;
