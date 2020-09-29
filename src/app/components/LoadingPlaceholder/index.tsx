import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

export enum Placeholder {
  STREAM_BOTTOM,
  VIDEO_FRAME,
}

interface LoadingPlaceholderProps {
  type?: Placeholder;
}
export const LoadingPlaceholder: React.FC<LoadingPlaceholderProps> = ({
  type = Placeholder.STREAM_BOTTOM,
}): ReactElement => {
  const renderProper = () => {
    switch (type) {
      case Placeholder.STREAM_BOTTOM:
        return (
          <ContentLoader
            speed={2}
            width={351}
            height={120}
            viewBox="0 0 390 120"
            backgroundColor="var(--placeholder-bckg)"
            foregroundColor="var(--placeholder)"
          >
            <rect x="1" y="2" rx="3" ry="3" width="373" height="16" />
            <rect x="1" y="29" rx="3" ry="3" width="114" height="7" />
            <rect x="1" y="46" rx="3" ry="3" width="148" height="7" />
          </ContentLoader>
        );
      case Placeholder.VIDEO_FRAME:
        return (
          <ContentLoader
            speed={2}
            width={374}
            height={211}
            viewBox="0 0 374 211"
            backgroundColor="var(--placeholder-bckg)"
            foregroundColor="var(--placeholder)"
          >
            <rect x="1" y="1" rx="3" ry="3" width="373" height="210" />
          </ContentLoader>
        );
      default:
        break;
    }
  };

  return <Container>{renderProper()}</Container>;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
