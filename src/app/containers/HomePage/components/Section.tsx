import React from 'react';
import styled from 'styled-components';
import { fontWeights } from '../../../../styles/themes';
import { Stream } from '../../../../types/Twitch';
import isEmpty from 'lodash/isEmpty';

type SectionProps = {
  label?: string;
  streams: Array<Stream>;
};

class Section extends React.Component<SectionProps> {
  render() {
    const { label, streams } = this.props;
    console.log('streams', streams);
    return (
      <SectionContainer>
        {label && <Label>{label}</Label>}
        {!isEmpty(streams) &&
          streams.map((stream: Stream, idx: number) => (
            <div key={`stream-${idx}`}>{stream.title}</div>
          ))}
      </SectionContainer>
    );
  }
}

const SectionContainer = styled.section`
  width: 100%;
  background: gray;
`;

const Label = styled.span`
  font-weight: ${fontWeights.bold};
`;

export default Section;
