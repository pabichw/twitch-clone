import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

export enum Placeholder {
  STREAM_BOTTOM,
  VIDEO_FRAME,
  SIDEBAR_ITEM,
  SIDEBAR_ITEM_COLLAPSED,
  CHANNEL_LIST_ITEM,
  GAME_THUMBNAIL,
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
            width={390}
            height={70}
            viewBox="0 0 390 70"
            backgroundColor="var(--placeholder-bckg)"
            foregroundColor="var(--placeholder)"
          >
            <rect x="0" y="0" rx="3" ry="3" width="373" height="13" />
            <rect x="1" y="22" rx="3" ry="3" width="86" height="8" />
            <rect x="1" y="36" rx="3" ry="3" width="100" height="8" />
            <rect x="1" y="56" rx="3" ry="3" width="59" height="12" />
            <rect x="69" y="56" rx="3" ry="3" width="59" height="12" />
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
      case Placeholder.SIDEBAR_ITEM:
        return (
          <ContentLoader
            speed={2}
            width={145}
            height={40}
            viewBox="0 0 145 40"
            backgroundColor="var(--placeholder)"
            foregroundColor="var(--placeholder-bckg)"
          >
            <rect x="45" y="6" rx="3" ry="3" width="88" height="10" />
            <rect x="45" y="22" rx="3" ry="3" width="52" height="6" />
            <circle cx="20" cy="20" r="20" />
          </ContentLoader>
        );
      case Placeholder.SIDEBAR_ITEM_COLLAPSED:
        return (
          <ContentLoader
            speed={2}
            width={30}
            height={30}
            viewBox="0 0 30 30"
            backgroundColor="var(--placeholder)"
            foregroundColor="var(--placeholder-bckg)"
          >
            <circle cx="15" cy="15" r="15" />
          </ContentLoader>
        );
      case Placeholder.CHANNEL_LIST_ITEM:
        return (
          <ContentLoader
            speed={2}
            width={390}
            height={73}
            viewBox="0 0 390 70"
            backgroundColor="var(--placeholder-bckg)"
            foregroundColor="var(--placeholder)"
          >
            <rect x="89" y="1" rx="3" ry="3" width="153" height="14" />
            <rect x="90" y="26" rx="3" ry="3" width="86" height="8" />
            <rect x="90" y="40" rx="3" ry="3" width="100" height="8" />
            <rect x="90" y="60" rx="3" ry="3" width="59" height="12" />
            <rect x="158" y="60" rx="3" ry="3" width="59" height="12" />
            <circle cx="39" cy="36" r="35" />
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
