import React, { FunctionComponent } from 'react';
import { TwitchSvg } from './__assets/TwitchSVG';
import styled from 'styled-components';

type TwitchLogoProps = {
  color?: string;
};

const TwitchLogo: FunctionComponent<TwitchLogoProps> = props => (
  <Wrapper>
    <TwitchSvg {...props} />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  width: 30px;
  padding: 3px 0 0 3px;
`;

export default TwitchLogo;
