import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import HomePage from './containers/HomePage';
import TopNav from './components/TopNav';
import SideNav from './containers/SideNav';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAppToken } from '../store/auth/actions';
import { AppToken } from '../types/Api';
import { RootState } from '../types';
import { toggleSideNav } from '../store/layout/actions';
import { MainLoader } from './components/MainLoader';
import StreamPage from './containers/StreamPage';
import { MOBILE_BREAKPOINT } from '../styles/media';

interface AppProps {
  getAppToken: () => void;
  isAppAuthenticated: boolean;
  appToken: AppToken;
  fetchingAppToken: boolean;
  isSideNavCollapsed: boolean;
  toggleSideNav: () => void;
}

interface AppState {
  isMobile: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < MOBILE_BREAKPOINT,
    };
  }
  async componentDidMount() {
    const { getAppToken } = this.props;
    await getAppToken();

    window.addEventListener('resize', () => {
      const { isMobile } = this.state;
      if (!isMobile && window.innerWidth < MOBILE_BREAKPOINT) {
        this.setState({ isMobile: true });
      } else {
        this.setState({ isMobile: false });
      }
    });
  }

  handleOnToggle = () => {
    const { toggleSideNav } = this.props;
    toggleSideNav();
  };

  render() {
    const { isMobile } = this.state;
    const { appToken, fetchingAppToken, isSideNavCollapsed } = this.props;

    const showMainLoader = fetchingAppToken;
    return (
      <BrowserRouter>
        <TopNav />
        <Main>
          {showMainLoader ? (
            <MainLoader />
          ) : (
            <>
              <SideNav
                isOpened={!isSideNavCollapsed}
                onToggle={this.handleOnToggle}
              />
              <Article
                id="article"
                maxWidth={`calc(100% - ${
                  isSideNavCollapsed || isMobile ? '50px' : '240px'
                })`}
              >
                {appToken && (
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/:id" component={StreamPage} />
                  </Switch>
                )}
              </Article>
            </>
          )}
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
  fetchingAppToken: state.auth.isLoading,
  isSideNavCollapsed: state.layout.isSideNavCollapsed,
});

const mapDispatch = {
  getAppToken,
  toggleSideNav,
};

export default connect(mapState, mapDispatch)(App);
