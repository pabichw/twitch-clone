import React from 'react';
import { FunctionComponent } from 'react';

type TwitchSVGProps = {
  color?: string;
};

export const TwitchSvg: FunctionComponent<TwitchSVGProps> = ({ color }) => (
  <svg
    width="40px"
    height="40px"
    version="1.1"
    viewBox="0 0 40 40"
    x="0px"
    y="0px"
  >
    <g fill="var(--primary)" fillRule="evenodd">
      <path d="M19 6v6h-2V6h2zm-7 0h2v6h-2V6zM5 0L0 5v18h6v5l5-5h4l9-9V0H5zm17 13l-4 4h-4l-4 4v-4H6V2h16v11z" />
      <path
        d="M18 17l4-4V2H6v15h4v4l4-4h4zM12 6h2v6h-2V6zm7 0h-2v6h2V6z"
        fill={color || '#DDD'}
      />
    </g>
  </svg>
);
