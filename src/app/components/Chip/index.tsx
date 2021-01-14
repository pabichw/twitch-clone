import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Color } from '../../../types';
import { fontSizes, fontWeights } from '../../../styles/themes';

type ChipProps = {
  color?: Color;
  onClick?: () => void;
  text?: string;
};

const Chip: FunctionComponent<ChipProps> = ({ onClick, text }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

const Container = styled.button`
  display: flex;
  align-items: center;
  background: var(--chip-bckg);
  color: var(--chip-color);
  cursor: pointer;
  height: 20px;
  min-width: 30px;
  padding: 0 8px;
  margin: 2px 2px 2px 0;
  border-radius: 8px;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.small};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  :hover {
    background: var(--chip-bckg-hover);
  }
`;

export default Chip;
