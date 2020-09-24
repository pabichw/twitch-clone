import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import styled from 'styled-components';

export function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Main>
        <SideNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Main>
      <GlobalStyle />
    </BrowserRouter>
  );
}

const Main = styled.main`
  display: flex;
  position: absolute;
  top: 50px;
  z-index: 0;
  width: 100%;
  min-height: calc(100vh - 50px);
`;
