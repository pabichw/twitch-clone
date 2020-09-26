import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import HomePage from './containers/HomePage';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAppToken } from '../store/auth/actions';
import { AppToken } from '../types/Api';
import { RootState } from '../types';

interface AppProps {
  getAppToken: () => void;
  isAppAuthenticated: boolean;
  appToken: AppToken;
}

class App extends React.Component<AppProps> {
  async componentDidMount() {
    const { getAppToken } = this.props;
    await getAppToken();
  }

  render() {
    const { appToken } = this.props;

    return (
      <BrowserRouter>
        <TopNav />
        <Main>
          <SideNav />
          <Article>
            {appToken && (
              <Switch>
                <Route exact path="/" component={HomePage} />
              </Switch>
            )}
          </Article>
        </Main>
        <GlobalStyle />
      </BrowserRouter>
    );
  }
}

const Main = styled.main`
  display: flex;
  position: absolute;
  top: 50px;
  z-index: 0;
  width: 100%;
  min-height: calc(100vh - 50px);
`;

const Article = styled.article`
  width: 100%;
`;

const mapState = (state: RootState) => ({
  isAppAuthenticated: state.auth.isAppAuthenticated,
  appToken: state.auth.appToken,
});

const mapDispatch = {
  getAppToken,
};

export default connect(mapState, mapDispatch)(App);
