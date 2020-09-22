import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Meta } from '../../../types/Meta';

type PageProps = {
  title?: string;
  metaTags?: Array<Meta>;
  children: ReactNode;
};

const Page: FunctionComponent<PageProps> = ({ title, metaTags, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {metaTags && metaTags.forEach(meta => <meta {...meta} />)}
      </Helmet>
      {children}
    </>
  );
};

export default Page;
