import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BUTTON } from '../../../types/UITypes';
import { Color } from '../../../types';
import { fontSizes, fontWeights } from '../../../styles/themes';

type ChipProps = {
  color?: Color;
  onClick?: () => void;
  text?: string;
};

const Chip: FunctionComponent<ChipProps> = ({ onClick, text, color }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--chip-bckg);
  color: var(--chip-color);
  cursor: pointer;
  height: 20px;
  min-width: 30px;
  padding: 0 8px;
  margin: 2px;
  border-radius: 8px;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.small};

  :hover {
    background: var(--chip-bckg-hover);
  }
`;

export default Chip;
