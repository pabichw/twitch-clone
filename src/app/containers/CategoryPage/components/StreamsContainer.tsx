import React from 'react';
import { Stream } from '../../../../types/Twitch';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import StreamThumbnail from '../../../components/StreamThumbnail/StreamThumbnail';

interface Props {
  streams: Array<Stream>;
  loading: boolean;
  onThumbClick: (stream: Stream) => void;
}

const StreamsContainer: React.FC<Props> = ({
  streams,
  loading,
  onThumbClick,
}) => {
  return (
    <Wrapper>
      {!isEmpty(streams) &&
        streams.map((s: Stream) => (
          <StreamWrapp>
            <StreamThumbnail
              key={`stream-thumb-${s.user_id}`}
              stream={s}
              loading={loading}
              constraintWidth
              onClick={() => onThumbClick(s)}
            />
          </StreamWrapp>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 30px;
`;

const StreamWrapp = styled.div`
  margin: 0 10px 14px 0;
`;

export default StreamsContainer;
