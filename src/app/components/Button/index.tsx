import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BUTTON } from '../../../types/UITypes';
import { Color } from '../../../types';
import { fontSizes, fontWeights } from '../../../styles/themes';

type ButtonProps = {
  icon?: any;
  onClick?: () => void;
  text?: string;
  type: BUTTON;
};

const Button: FunctionComponent<ButtonProps> = ({
  icon,
  onClick,
  text,
  type = BUTTON.SECONDARY,
}) => {
  return (
    <Container
      onClick={onClick}
      customPadding={type === BUTTON.ICON ? '0' : '0 10px'}
      hover={STYLES[type].hover}
      {...STYLES[type]}
    >
      {icon}
      {text}
    </Container>
  );
};

type ContainerProps = {
  hover: {
    background: Color;
  };
  background: Color;
  customPadding: string;
};

const STYLES = {
  [BUTTON.PRIMARY]: {
    background: 'var(--primary)',

    hover: {
      background: 'var(--primaryHover)',
    },
  },
  [BUTTON.SECONDARY]: {
    background: 'var(--secondary)',

    hover: {
      background: 'var(--secondaryHover)',
    },
  },
  [BUTTON.ICON]: {
    background: 'transparent',

    hover: {
      background: 'rgba(255,255,255,0.2)',
    },
  },
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};
  color: var(--font-normal);
  cursor: pointer;
  height: 30px;
  min-width: 30px;
  padding: ${props => props.customPadding};
  margin: 0 5px;
  border-radius: 4px;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.regular};

  :hover {
    background: ${(props: ContainerProps) => props.hover.background};
  }
`;

export default Button;
