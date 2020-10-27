import React from 'react';
import GhostsInfo from '../GhostsInfo';
import styled from 'styled-components';

const NotFoundStream: React.FC = () => (
  <Wrap>
    <GhostsInfo
      headerText="No such streamer found"
      descriptionText="Check provided URL"
    />
  </Wrap>
);

const Wrap = styled.div`
  height: 100%;
  width: 100%;
`;

export default NotFoundStream;
