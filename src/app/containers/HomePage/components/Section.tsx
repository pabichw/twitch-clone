import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { fontWeights } from '../../../../styles/themes';
import { DummyStream, Stream } from '../../../../types/Twitch';
import isEmpty from 'lodash/isEmpty';
import StreamThumbnail from './StreamThumbnail';
import Button from '../../../components/Button';
import { BUTTON } from '../../../../types/UITypes';
import { ArrowDownSvg } from '../../../__assets/ArrorDownSVG';
import { Fade } from '@material-ui/core';
import { MOCKS } from '../../../__tests__/mocks';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface SectionProps {
  label?: string;
  streams: Array<Stream>;
  loading: boolean;
}

interface SectionState {
  fade: boolean;
  expanded: boolean;
  lastRender: Date;
}

class Section extends React.Component<
  RouteComponentProps<{}> & SectionProps,
  SectionState
> {
  state = {
    fade: false, // for initial fade in animation
    expanded: false,
    lastRender: new Date(), // just to force rerendering on resize
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ lastRender: new Date() });
    });

    this.setState({ fade: true });
  }

  onStreamClick = (stream: Stream | DummyStream): void => {
    console.log('stream', stream, 'props', this.props);
    this.props.history.push(`asd`);
  };

  render() {
    const { fade, expanded } = this.state;
    const { label, streams, loading } = this.props;

    const minPxWidthForStream = 300;
    const sectionId = `stream-row-${label}`;
    const articleElem = document.getElementById('article');

    const dummyStreams: Array<DummyStream> = MOCKS.STREAMS;
    return (
      <Fade in={fade}>
        <SectionContainer>
          {label && <Label>{label}</Label>}
          <StreamsRow id={sectionId}>
            {(isEmpty(streams) ? dummyStreams : streams).map(
              (stream: Stream | DummyStream, idx: number) => {
                let isTooNarrow;
                if (articleElem) {
                  isTooNarrow =
                    articleElem.offsetWidth - 100 <
                    (minPxWidthForStream - 10) * (idx + 1); // min - padding left/right
                }
                return (
                  !isTooNarrow && (
                    <StreamThumbnail
                      key={`stream-${idx}`}
                      stream={stream}
                      loading={loading}
                      onClick={() =>
                        !isEmpty(streams) && this.onStreamClick(stream)
                      }
                    />
                  )
                );
              },
            )}
          </StreamsRow>
          {expanded && (
            <StreamsRow id={`${sectionId}-2`}>
              {streams
                .slice(4, streams.length - 1)
                .map((stream: Stream | DummyStream, idx: number) => {
                  let isTooNarrow;
                  if (articleElem) {
                    isTooNarrow =
                      articleElem.offsetWidth - 100 <
                      (minPxWidthForStream - 10) * (idx + 1); // min - padding left/right
                  }
                  return (
                    !isTooNarrow && (
                      <StreamThumbnail
                        key={`stream-${idx}`}
                        stream={stream}
                        loading={loading}
                        onClick={() => this.onStreamClick(stream)}
                      />
                    )
                  );
                })}
            </StreamsRow>
          )}
          {!loading && (
            <ShowMore
              expanded={expanded}
              onClick={() => this.setState({ expanded: !expanded })}
            />
          )}
        </SectionContainer>
      </Fade>
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
  padding-bottom: 20px;
`;

const Label = styled.span`
  display: inline-block;
  font-weight: ${fontWeights.bold};
  margin-bottom: 10px;
`;

interface ShowMoreProps {
  expanded: boolean;
  onClick: () => void;
}

const ShowMore: FunctionComponent<ShowMoreProps> = ({ expanded, onClick }) => (
  <ShowMoreLine onClick={onClick}>
    {!expanded && (
      <ShowMoreWrap>
        <Button
          type={BUTTON.TRANSPARENT}
          text="Show more"
          onClick={onClick}
          iconRight={<ArrowDownSvg />}
          color="var(--primaryLight)"
        />
      </ShowMoreWrap>
    )}
  </ShowMoreLine>
);

const ShowMoreWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 100%;
  background: var(--background);
`;

const ShowMoreLine = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center
  width: 100%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: var(--primary);
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 12px;

    width: 100%;
    height: 1px;
    background: var(--separator-color);
  }
`;

// @ts-ignore
export default withRouter(Section);
