import React, { Component } from 'react';
import styled from 'styled-components';
import TwitchLogo from '../TwitchLogo';
import Categories from './Categories';

type TopNavState = {
  isLoggedIn: Boolean;
};

class TopNav extends Component<{}, TopNavState> {
  render() {
    return (
      <Nav>
        <Left>
          <TwitchLogo color="#0ff" />
          <Categories />
        </Left>
        <Center>asda</Center>
        <Right>aaa</Right>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  display: flex;
  height: 50px;
  background-color: var(--navbar);
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
const Left = styled.div`
  height: 100%;
  width: 407px;
  background-color: red;
`;
const Center = styled.div`
  height: 100%;
  max-width: 400px;
`;
const Right = styled.div`
  height: 100%;
  width: 407px;
`;

export default TopNav;
