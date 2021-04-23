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
import SearchPage from './containers/SearchPage';
import CategoryPage from './containers/CategoryPage';
import Popup from './components/Popup';
import { LS_KEYS } from 'config/localStorageKeys';

interface AppProps {
  getAppToken: () => void;
  isAppAuthenticated: boolean;
  appToken: AppToken;
  fetchingAppToken: boolean;
  isSideNavCollapsed: boolean;
  toggleSideNav: any;
  isPopupVisible: boolean;
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
    const { getAppToken, toggleSideNav } = this.props;

    await localStorage.removeItem(LS_KEYS.APP_TOKEN);
    await getAppToken();

    window.addEventListener('resize', async () => {
      const { isMobile } = this.state;
      if (!isMobile && window.innerWidth < MOBILE_BREAKPOINT) {
        this.setState({ isMobile: true });
        toggleSideNav(false);
      } else {
        this.setState({ isMobile: false });
        toggleSideNav(true);
      }
    });
  }

  handleOnToggle = () => {
    const { toggleSideNav } = this.props;
    toggleSideNav();
  };

  render() {
    const { isMobile } = this.state;
    const {
      appToken,
      fetchingAppToken,
      isSideNavCollapsed,
      isPopupVisible,
    } = this.props;

    const showMainLoader = fetchingAppToken;

    return (
      <BrowserRouter>
        <AppWrap>
          {isPopupVisible && <Popup />}
          <TopNav />
          <Main>
            {showMainLoader && !appToken ? (
              <MainLoader />
            ) : (
              <>
                <SideNav
                  isOpened={!isSideNavCollapsed}
                  isMobile={isMobile}
                  onToggle={this.handleOnToggle}
                />
                <Article
                  id="article"
                  maxWidth={`calc(100% - ${
                    isSideNavCollapsed || isMobile ? '50px' : '240px'
                  })`}
                >
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/:id" component={StreamPage} />
                    <Route
                      exact
                      path="/browse/game/:catName"
                      component={CategoryPage}
                    />
                  </Switch>
                </Article>
              </>
            )}
          </Main>
        </AppWrap>
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

const AppWrap = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const mapState = (state: RootState) => ({
  isAppAuthenticated: state.auth.isAppAuthenticated,
  appToken: state.auth.appToken,
  fetchingAppToken: state.auth.isLoading,
  isSideNavCollapsed: state.layout.isSideNavCollapsed,
  isPopupVisible: state.layout.popup.isVisible,
});

const mapDispatch = {
  getAppToken,
  toggleSideNav,
};

export default connect(mapState, mapDispatch)(App);
