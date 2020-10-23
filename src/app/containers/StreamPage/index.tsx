import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import TwitchVideoEmbed from './components/TwitchVideoEmbed';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import TwitchChatEmbed from './components/TwitchChatEmbed';
import { MOBILE_BREAKPOINT } from '../../../styles/media';
import { getBroadcaster } from '../../../store/streamPage/actions';
import { Broadcaster, Stream } from '../../../types/Twitch';
import BroadcasterInfo from './components/BroadcasterInfo';
import StylingUtils from '../../../utils/stylingUtils';
import get from 'lodash/get';
import { LS_KEYS } from '../../../config/localStorageKeys';

interface RouterProps {
  id: string | undefined;
}

interface StreamPageProps {
  getBroadcaster: ({ login: string }) => void;
  stream: Stream;
  broadcaster: Broadcaster;
}

interface StreamPageState {
  isMobile: boolean;
  isChatCollapsed: boolean;
}

class StreamPage extends React.Component<
  RouteComponentProps<RouterProps> & StreamPageProps,
  StreamPageState
> {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth < MOBILE_BREAKPOINT,
      isChatCollapsed: !!localStorage.getItem(LS_KEYS.IS_CHAT_COLLAPSED),
    };
  }
  async componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ isMobile: window.innerWidth < MOBILE_BREAKPOINT });
    });
    const { match, getBroadcaster } = this.props;
    // @ts-ignore
    const {
      params: { id },
    } = match;
    await getBroadcaster({ login: id });
  }

  async componentDidUpdate(prevProps) {
    const prevId = get(prevProps, 'match.params.id');
    const id = get(this.props, 'match.params.id');

    if (prevId !== id) {
      const { getBroadcaster } = this.props;
      await getBroadcaster({ login: id });
    }
  }

  onChatToggle = (val: boolean): void => {
    this.setState((state: StreamPageState) => ({
      isChatCollapsed: typeof val === 'boolean' ? !val : !state.isChatCollapsed,
    }));

    if (val) {
      localStorage.removeItem(LS_KEYS.IS_CHAT_COLLAPSED);
    } else {
      localStorage.setItem(LS_KEYS.IS_CHAT_COLLAPSED, 'true');
    }
  };

  render() {
    const { match, stream, broadcaster } = this.props;
    const { isMobile, isChatCollapsed } = this.state;
    // @ts-ignore
    const { id } = match.params;

    const { hostname } = window.location;
    const urlVideo = `https://player.twitch.tv/?channel=${id}&parent=${hostname}`;
    const urlChat = `https://www.twitch.tv/embed/${id}/chat?parent=${hostname}&darkpopout`;

    return (
      <Page
        htmlProps={{ id: 'page-stream' }}
        title="Stream"
        metaTags={[
          { name: 'title', content: 'Stream Title' },
          { name: 'description', content: 'Stream Page' },
        ]}
      >
        <Content>
          <Main>
            <TwitchVideoEmbed
              url={urlVideo}
              isChatCollapsed={isChatCollapsed}
              onToggleChat={() => this.onChatToggle(true)}
            />
            {broadcaster && stream && (
              <StreamInfoWrapper>
                <BroadcasterInfo broadcaster={broadcaster} stream={stream} />
              </StreamInfoWrapper>
            )}
          </Main>
          {!isMobile && !isChatCollapsed && (
            <RightCol>
              <TwitchChatEmbed
                url={urlChat}
                onToggle={() => this.onChatToggle(false)}
              />
            </RightCol>
          )}
        </Content>
      </Page>
    );
  }
}

const Content = styled.div`
  display: flex;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
  }
`;

const Main = styled.main`
  flex: 1;
  height: calc(100vh - 50px);
  overflow-y: scroll;

  ${StylingUtils.hideScrollbar()}
`;

const RightCol = styled.div`
  width: 340px;
  height: calc(100vh - 50px);
`;

const StreamInfoWrapper = styled.div`
  margin: 20px;
`;

const mapState = state => ({
  stream: state.streamPage.stream,
  broadcaster: state.streamPage.broadcaster,
});

const mapDispatch = {
  getBroadcaster,
};

export default connect(mapState, mapDispatch)(StreamPage);
