import React, { Component } from 'react';
import styled from 'styled-components';
import { fontSizes, fontWeights } from '../../../styles/themes';
import { BUTTON } from '../../../types/UITypes';
import Button from '../../components/Button';
import CollapseSVG from '../../__assets/CollapseSVG';
import { ChannelsList } from './components/ChannelsList';
import { connect } from 'react-redux';
import { RootState } from '../../../types';
import { Channel } from '../../../types/Twitch';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { channelRoutingName } from '../../../utils/other';
import { getRecommendedChannels } from '../../../store/sidenav/actions';
import isEmpty from 'lodash/isEmpty';

interface SideNavState {}

interface SideNavProps {
  isOpened: boolean;
  isMobile: boolean;
  onToggle: () => void;
  getRecommendedChannels: ({ onSuccess: any }) => void;
  channels: Array<Channel>;
}

class SideNav extends Component<
  RouteComponentProps<{}> & SideNavProps,
  SideNavState
> {
  componentDidMount() {
    const { getRecommendedChannels } = this.props;
    getRecommendedChannels({ onSuccess: () => {} });
  }

  handleCollapse = () => {
    const { onToggle } = this.props;
    onToggle();
  };

  handleChannelClick = (ch: Channel): void => {
    const { history } = this.props;
    history.push(`/${channelRoutingName(ch)}`);
  };

  render() {
    const { isOpened, isMobile, channels } = this.props;

    console.log('channels', channels);
    const slicedChannels = isEmpty(channels) ? [] : channels.slice(0, 10); //because there is no channels-specific endpoint available

    return (
      <Aside isOpened={isOpened && !isMobile}>
        <Content>
          {!isMobile && (
            <CollapseBtnWrapper r={isOpened ? '10px' : '5px'}>
              <Button
                type={BUTTON.TRANSPARENT}
                icon={
                  <IconWrap rotate={isOpened ? '0deg' : '180deg'}>
                    <CollapseSVG />
                  </IconWrap>
                }
                onClick={this.handleCollapse}
              />
            </CollapseBtnWrapper>
          )}
          {isOpened && !isMobile && <Header>Recommended channels</Header>}
          <ChannelsList
            channels={slicedChannels}
            collapsed={!isOpened || isMobile}
            isMobile={isMobile}
            onChannelClick={this.handleChannelClick}
          />
        </Content>
      </Aside>
    );
  }
}

type AsideProps = {
  isOpened: boolean;
};

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--sidebar);
  width: ${(props: AsideProps) => (props.isOpened ? '240px' : '50px')};
  height: calc(100vh - 50px);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;

type IconWrapProps = {
  rotate?: string;
};

const IconWrap = styled.div`
  height: 20px;
  width: 20px;
  transform: rotateZ(${(props: IconWrapProps) => props.rotate});
`;

type CollapseBtnWrapper = {
  r: string;
};

const CollapseBtnWrapper = styled.div`
  position: absolute;
  right: ${(props: CollapseBtnWrapper) => props.r};
  top: 8px;
`;

const Header = styled.header`
  font-weight: ${fontWeights.bold};
  line-height: 18px;
  margin: 10px;
  padding-top: 5px;
  font-size: ${fontSizes.regular};
  text-transform: uppercase;
`;

const mapState = (state: RootState) => ({
  channels: state.sideNav.channels,
});

const mapDispatch = {
  getRecommendedChannels,
};

export default withRouter(connect(mapState, mapDispatch)(SideNav));
