import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { fontSizes, fontWeights } from '../../../styles/themes';

interface SectionProps {
  children: ReactNode;
  placeholder?: ReactNode | boolean;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, placeholder, title }) => {
  return (
    <Content>
      {placeholder || (
        <>
          <Header>{title}</Header>
          <Main>{children}</Main>
        </>
      )}
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.span`
  display: inline-block;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.big};
  margin-bottom: 20px;
`;

const Main = styled.div`
  width: 100%;

  border-top: 1px solid var(--separator-color2);
`;

export default Section;
