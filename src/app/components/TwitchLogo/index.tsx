import React, { FunctionComponent } from 'react';
import { TwitchSvg } from './__assets/TwitchSVG';
import styled from 'styled-components';

type TwitchLogoProps = {
  color: string;
};

const TwitchLogo: FunctionComponent<TwitchLogoProps> = props => (
  <Wrapper>
    <TwitchSvg {...props} />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  width: 30px;
  padding-top: 3px;
  zoom: 1.1;
  background-color: green;
`;

export default TwitchLogo;
