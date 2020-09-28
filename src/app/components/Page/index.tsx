import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Meta } from '../../../types';

type PageProps = {
  htmlProps?: object;
  title?: string;
  metaTags?: Array<Meta>;
  children: ReactNode;
};

const Page: FunctionComponent<PageProps> = ({
  htmlProps,
  title,
  metaTags,
  children,
}) => {
  return (
    <div {...htmlProps}>
      <Helmet>
        <title>{title}</title>
        {metaTags && metaTags.forEach(meta => <meta {...meta} />)}
      </Helmet>
      {children}
    </div>
  );
};

export default Page;
