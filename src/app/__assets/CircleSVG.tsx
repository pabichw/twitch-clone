import React from 'react';
import styled from 'styled-components';

interface Props {
  stroke?: string;
}

const CircleSVG: React.FC<Props> = ({ stroke }) => {
  const radius = 5;
  const offsetY = 5;
  const offsetX = 5;
  return (
    <Svg
      width={`calc(100% + ${radius * 2}px`}
      height={`calc(100% + ${radius * 2}px`}
      xmlns="http://www.w3.org/2000/svg"
      customTop={`-${offsetY}px`}
      customLeft={`-${offsetX}px`}
    >
      <defs>
        <linearGradient
          id="cl1"
          gradientUnits="objectBoundingBox"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#fff" />
          <stop offset="30%" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
      <g>
        <ellipse
          ry="50%"
          rx="50%"
          cy={`calc(50% - ${radius}px + ${offsetY}px)`}
          cx={`calc(50% - ${radius}px + ${offsetX}px)`}
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth="3"
          stroke={stroke || 'url(#cl1)'}
          fill="none"
        />
      </g>
    </Svg>
  );
};

interface SvgProps {
  customTop: string;
  customLeft: string;
}

const Svg = styled.svg`
  position: absolute;
  top: ${(props: SvgProps) => props.customTop};
  left: ${(props: SvgProps) => props.customLeft};
`;

export default CircleSVG;
