import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { fontWeights } from '../../../../styles/themes';
import { Stream } from '../../../../types/Twitch';
import isEmpty from 'lodash/isEmpty';
import StreamThumbnail from './StreamThumbnail';

interface SectionProps {
  label?: string;
  streams: Array<Stream>;
}

interface SectionState {
  expanded: boolean;
  lastRender: Date;
}

class Section extends React.Component<SectionProps, SectionState> {
  state = {
    expanded: false,
    lastRender: new Date(), // just to force rerendering on resize
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ lastRender: new Date() });
    });
  }

  render() {
    const { expanded } = this.state;
    const { label, streams } = this.props;
    console.log('streams', streams);
    const minPxWidthForStream = 300;
    const sectionId = `stream-row-${label}`;
    const articleElem = document.getElementById('article');

    return (
      <SectionContainer>
        {label && <Label>{label}</Label>}
        <StreamsRow id={sectionId}>
          {!isEmpty(streams) &&
            streams.map((stream: Stream, idx: number) => {
              let isTooNarrow;
              if (articleElem) {
                isTooNarrow =
                  articleElem.offsetWidth - 100 <
                  (minPxWidthForStream - 10) * (idx + 1); // min - padding left/right
              }
              return (
                !isTooNarrow && (
                  <StreamThumbnail key={`stream-${idx}`} stream={stream} />
                )
              );
            })}
        </StreamsRow>
        {!expanded && (
          <ShowMore onClick={() => this.setState({ expanded: !expanded })} />
        )}
      </SectionContainer>
    );
  }
}

const SectionContainer = styled.section`
  width: 100%;
  padding: 20px 30px;
`;

const StreamsRow = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  flex: 1;
`;

const Label = styled.span`
  display: inline-block;
  font-weight: ${fontWeights.bold};
  margin-bottom: 10px;
`;

interface ShowMoreProps {
  onClick: () => void;
}

const ShowMore: FunctionComponent<ShowMoreProps> = ({ onClick }) => (
  <ShowMoreText onClick={onClick}>Show more</ShowMoreText>
);

const ShowMoreText = styled.p`
  position: relative;
  width: 100%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: var(--primary);
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;

    width: 40%;
    height: 1px;
    background: var(--separator-color);
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 12px;

    width: 40%;
    height: 1px;
    background: var(--separator-color);
  }
`;

export default Section;
