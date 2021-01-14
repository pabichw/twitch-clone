import React, { FunctionComponent } from 'react';
import { Color } from '../../types';

interface CrossSvgProps {
  color?: Color;
}

export const CrossSvg: FunctionComponent<CrossSvgProps> = ({ color }) => (
  <svg
    width="100%"
    height="100%"
    version="1.1"
    viewBox="0 0 20 20"
    x="0px"
    y="0px"
    fill={color || 'var(--font-secondary)'}
  >
    <path d="M8.5 10L4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z" />
  </svg>
);
