import React, { Component } from 'react';
import styled from 'styled-components';
import TwitchLogo from '../TwitchLogo';
import Categories from './Categories';
import AuthNav from '../../containers/AuthNav';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MOBILE_BREAKPOINT, sizes } from '../../../styles/media';

type TopNavProps = {};

type TopNavState = {
  isMobile: boolean;
};

class TopNav extends Component<
  RouteComponentProps<{}> & TopNavProps,
  TopNavState
> {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth < MOBILE_BREAKPOINT,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ isMobile: window.innerWidth < MOBILE_BREAKPOINT });
    });
  }

  twitchLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    const { isMobile } = this.state;
    return (
      <Nav>
        <Left>
          <TwitchLogo onClick={this.twitchLogoClick} />
          <Categories isMobile={isMobile} />
        </Left>
        {/*<Center>Search</Center>*/}
        <Right>
          <AuthNav isMobile={isMobile} />
        </Right>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  display: flex;
  position: absolute;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  background-color: var(--navbar);
  height: 50px;
  width: 100vw;
  padding: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.9) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.9) 0px 0px 2px 0px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 407px;
`;
const Center = styled.div`
  height: 100%;
  max-width: 400px;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 407px;
`;

export default withRouter(TopNav);
