import React, { Component } from 'react';
import styled from 'styled-components';
import { fontSizes, fontWeights } from '../../../styles/themes';
import { BUTTON } from '../../../types/UITypes';
import Button from '../../components/Button';
import CollapseSVG from '../../__assets/CollapseSVG';
import { sizes } from '../../../styles/media';
import { ChannelsList } from './components/ChannelsList';
import { connect } from 'react-redux';
import { RootState } from '../../../types';
import { getStreams } from '../../../store/home/actions';
import { Stream } from '../../../types/Twitch';

interface SideNavState {
  isMobile: Boolean;
}

interface SideNavProps {
  isOpened: boolean;
  onToggle: () => void;
  streams: Array<Stream>;
}

class SideNav extends Component<SideNavProps, SideNavState> {
  state = {
    isMobile: false,
  };

  componentDidMount() {
    const { isMobile } = this.state;
    window.addEventListener('resize', () => {
      if (!isMobile && window.innerWidth < sizes.medium) {
        this.setState({ isMobile: true });
      }
      if (window.innerWidth >= sizes.medium) {
        this.setState({ isMobile: false });
      }
    });
  }

  handleCollapse = () => {
    const { onToggle } = this.props;
    onToggle();
  };

  render() {
    const { isMobile } = this.state;
    const { isOpened, streams } = this.props;

    const channels = streams.slice(0, 10); //because there is no channels-specific endpoint available

    return (
      <Aside isOpened={isOpened && !isMobile}>
        {isMobile ? (
          <MobileContent />
        ) : (
          <Content>
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
            {isOpened && <Header>Recommended channels</Header>}
            <ChannelsList channels={channels} collapsed={!isOpened} />
          </Content>
        )}
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

const MobileContent = styled.div``;

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
  streams: state.home.streams,
});

const mapDispatch = {
  getStreams,
};

export default connect(mapState, mapDispatch)(SideNav);
