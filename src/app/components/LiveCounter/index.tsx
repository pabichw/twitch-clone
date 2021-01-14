import React from 'react';
import styled from 'styled-components';
import { fontWeights } from '../../../styles/themes';
import numeral from 'numeral';
import EyeSVG from '../../__assets/EyeSVG';

interface Props {
  views?: number;
}

const ViewsCounter: React.FC<Props> = ({ views = 0 }) => {
  return (
    <Wrapper>
      <Icon>
        <EyeSVG />
      </Icon>
      <Text>{numeral(views).format('0,000')}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  color: var(--font-secondary);
`;
const Icon = styled.span`
  height: 21px;
  width: 21px;
  margin-right: 5px;
`;
const Text = styled.div`
  font-weight: ${fontWeights.bold};
  font-size: 13px;
  margin-top: 7px;
`;

export default ViewsCounter;
