import React from 'react';
import styled from 'styled-components';

const Elevate: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
`;

export default Elevate;
