import React, { FunctionComponent } from 'react';
import { TwitchSvg } from './__assets/TwitchSVG';
import styled from 'styled-components';

type TwitchLogoProps = {
  color?: string;
  onClick?: () => void;
};

const TwitchLogo: FunctionComponent<TwitchLogoProps> = ({
  onClick,
  ...props
}) => (
  <Wrapper onClick={onClick && onClick}>
    <TwitchSvg {...props} />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  width: 30px;
  padding: 3px 0 0 3px;
  cursor: pointer;
`;

export default TwitchLogo;
