import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { Meta } from '../../../types';
import styled from 'styled-components';
import Fade from '@material-ui/core/Fade';

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
  const [appear, setAppear] = useState(false);

  useEffect(() => setAppear(true), []);

  console.log('appear', appear);
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

const Container = styled.div``;

export default Page;
