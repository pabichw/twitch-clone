import React from 'react';
import styled from 'styled-components';
import { SpinnerSvg } from '../../__assets/SpinnerSVG';

export const MainLoader = () => (
  <Container>
    <LoaderWrapper>
      <SpinnerSvg />
    </LoaderWrapper>
  </Container>
);

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: var(--main-loader-bckg);
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
`;
