import React, { FunctionComponent } from 'react';
import { Color } from '../../types';

interface ArrowDownSvgProps {
  color?: Color;
}

export const ArrowDownSvg: FunctionComponent<ArrowDownSvgProps> = ({
  color,
}) => (
  <svg
    className="tw-svg__asset tw-svg__asset--angledown tw-svg__asset--inherit"
    width="20px"
    height="20px"
    version="1.1"
    viewBox="0 0 20 20"
    x="0px"
    y="0px"
  >
    <g fill={color || 'var(--text-normal)'}>
      <path d="M14.5 6.5L10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z" />
    </g>
  </svg>
);
