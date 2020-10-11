import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Meta } from '../../../types';
import styled from 'styled-components';
import Fade from '@material-ui/core/Fade';
import StylingUtils from '../../../utils/stylingUtils';

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
    <Container {...htmlProps}>
      <Fade timeout={5000}>
        <>
          <Helmet>
            <title>{title}</title>
            {metaTags && metaTags.forEach(meta => <meta {...meta} />)}
          </Helmet>
          {children}
        </>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 50px);
  overflow-y: scroll;

  ${StylingUtils.hideScrollbar()}
`;

export default Page;
