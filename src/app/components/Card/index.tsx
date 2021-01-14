import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
}

const Card: React.FC<Props> = ({ children, width, height }) => {
  return (
    <Container w={width || 'auto'} h={height || 'auto'}>
      {children}
    </Container>
  );
};

interface ContainerProps {
  w: string;
  h: string;
}

const Container = styled.div`
  padding: 30px 20px;
  background: var(--card-bckg);
  border-radius: 6px;
  width: ${(props: ContainerProps) => props.w};
  height: ${(props: ContainerProps) => props.h};
`;

export default Card;
