import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import TwitchVideoEmbed from './components/TwitchVideoEmbed';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import TwitchChatEmbed from './components/TwitchChatEmbed';
import { MOBILE_BREAKPOINT } from '../../../styles/media';

interface RouterProps {
  id: string | undefined;
}

interface StreamPageProps {}

interface StreamPageState {
  isMobile: boolean;
}

class StreamPage extends React.Component<
  RouteComponentProps<RouterProps> & StreamPageProps,
  StreamPageState
> {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth < MOBILE_BREAKPOINT,
    };
  }
  async componentDidMount() {
    const { match } = this.props;
    window.addEventListener('resize', () => {
      this.setState({ isMobile: window.innerWidth < MOBILE_BREAKPOINT });
    });
    console.log('match', match);
  }

  render() {
    const { match } = this.props;
    const { isMobile } = this.state;
    // @ts-ignore
    const { id } = match.params;

    const { hostname } = window.location;
    const url = `https://player.twitch.tv/?channel=${id}&parent=${hostname}`;
    const urlChat = `https://www.twitch.tv/embed/${id}/chat?parent=${hostname}&darkpopout`;

    console.log('props', this.props);
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
            <TwitchVideoEmbed url={url} />
          </Main>
          {!isMobile && (
            <RightCol>
              <TwitchChatEmbed url={urlChat} />
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
`;

const RightCol = styled.div`
  width: 340px;
  height: calc(100vh - 50px);
`;
const mapState = () => ({});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(StreamPage);
