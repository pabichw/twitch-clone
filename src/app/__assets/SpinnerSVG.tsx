import React, { FunctionComponent } from 'react';
import { Color } from '../../types';

interface SpinnerSvgProps {
  color?: Color;
}

export const SpinnerSvg: FunctionComponent<SpinnerSvgProps> = ({ color }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      r="32"
      stroke={color || 'var(--main-loader-spinner)'}
      strokeWidth="8"
      strokeDasharray="50.26548245743669 50.26548245743669"
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1.408450704225352s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
);
