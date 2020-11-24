import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BUTTON } from '../../../types/UITypes';
import { Color } from '../../../types';
import { fontSizes, fontWeights } from '../../../styles/themes';

type ButtonProps = {
  color?: Color;
  icon?: any;
  iconRight?: any;
  onClick?: () => void;
  text?: string;
  type: BUTTON;
};

const Button: FunctionComponent<ButtonProps> = ({
  icon,
  iconRight,
  onClick,
  text,
  type = BUTTON.SECONDARY,
  color,
}) => {
  return (
    <Container
      onClick={onClick}
      padding={type === BUTTON.TRANSPARENT && icon && !text ? '0' : '0 10px'}
      {...STYLES[type]}
      hover={STYLES[type].hover}
      {...(color && { style: { color } })}
    >
      {icon}
      {text}
      {iconRight && <IconRight>{iconRight}</IconRight>}
    </Container>
  );
};

type ContainerProps = {
  hover: {
    background: Color;
  };
  background: Color;
  height?: string;
  width?: string;
  'border-radius'?: string;
  padding?: string;
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
  [BUTTON.TRANSPARENT]: {
    background: 'transparent',

    hover: {
      background: 'rgba(255,255,255,0.2)',
    },
  },
  [BUTTON.FIT_PARENT]: {
    background: 'transparent',
    height: '100%',
    'border-radius': '0px',
    padding: '0 5px',

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
  height: ${props => props.height || '30px'};
  min-width: ${props => props['min-width'] || '30px'};
  padding: ${props => props.padding || '0 10px'};

  margin: 0 5px;
  border-radius: ${props => props['border-radius'] || '4px'};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.regular};

  :hover {
    background: ${(props: ContainerProps) => props.hover.background};
  }
`;

const IconRight = styled.span`
  margin-left: 5px;
`;

export default Button;
