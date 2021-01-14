import React from 'react';
import styled from 'styled-components';
import { fontWeights } from '../../../../../../../styles/themes';

const LiveLabel = () => (
  <Wrapper>
    <Label>LIVE</Label>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 0 5px;
  border-radius: 4px;
  background-color: var(--live-bckg);
  box-shadow: #000 0px 0px 10px;
`;

const Label = styled.span`
  color: #fff;
  font-size: 13px;
  font-weight: ${fontWeights.bold};
  display: inline-block;
`;

export default LiveLabel;
