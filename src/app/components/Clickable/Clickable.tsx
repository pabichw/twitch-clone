import React, { ReactElement } from 'react';

interface ClickableProps {
  tabIndex?: number;
}
// this component exists only to make element focus while 'tabbing through' site
export const Clickable: React.FC<ClickableProps> = ({
  tabIndex,
  children,
}): ReactElement => (
  <span className="tabbable" tabIndex={tabIndex || 0}>
    {children}
  </span>
);
