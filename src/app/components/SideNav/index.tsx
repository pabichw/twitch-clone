import React, { Component } from 'react';
import styled from 'styled-components';
import { fontSizes, fontWeights } from '../../../styles/themes';
import { BUTTON } from '../../../types/UITypes';
import Button from '../Button';
import CollapseSVG from '../../__assets/CollapseSVG';

type SideNavState = {
  isMobile: Boolean;
  isOpened: Boolean;
};

class SideNav extends Component<{}, SideNavState> {
  state = {
    isMobile: false,
    isOpened: true,
  };

  handleCollapse = () => {
    this.setState(state => ({ isOpened: !state.isOpened }));
  };

  render() {
    const { isOpened } = this.state;
    return (
      <Aside isOpened={isOpened}>
        <Content>
          <CollapseBtnWrapper r={isOpened ? '10px' : '5px'}>
            <Button
              type={BUTTON.ICON}
              icon={
                <IconWrap rotate={isOpened ? '0deg' : '180deg'}>
                  <CollapseSVG />
                </IconWrap>
              }
              onClick={this.handleCollapse}
            />
          </CollapseBtnWrapper>
          {isOpened && <Header>Recommended channels</Header>}
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

export default SideNav;
