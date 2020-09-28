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
import { toggleSideNav } from '../store/layout/actions';

interface AppProps {
  getAppToken: () => void;
  isAppAuthenticated: boolean;
  appToken: AppToken;
  isSideNavCollapsed: boolean;
  toggleSideNav: () => void;
}

class App extends React.Component<AppProps> {
  async componentDidMount() {
    const { getAppToken } = this.props;
    await getAppToken();
  }

  handleOnToggle = () => {
    const { toggleSideNav } = this.props;
    toggleSideNav();
  };

  render() {
    const { appToken, isSideNavCollapsed } = this.props;

    console.log('isSIdeCollapsed', isSideNavCollapsed);
    return (
      <BrowserRouter>
        <TopNav />
        <Main>
          <SideNav
            isOpened={isSideNavCollapsed}
            onToggle={this.handleOnToggle}
          />
          <Article
            id="article"
            maxWidth={`calc(100% - ${isSideNavCollapsed ? '240px' : '50px'})`}
          >
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

type ArticleProps = {
  maxWidth: string;
};
const Article = styled.article`
  flex: 1;
  max-width: ${(props: ArticleProps) => props.maxWidth};
`;

const mapState = (state: RootState) => ({
  isAppAuthenticated: state.auth.isAppAuthenticated,
  appToken: state.auth.appToken,
  isSideNavCollapsed: state.layout.isSideNavCollapsed,
});

const mapDispatch = {
  getAppToken,
  toggleSideNav,
};

export default connect(mapState, mapDispatch)(App);
