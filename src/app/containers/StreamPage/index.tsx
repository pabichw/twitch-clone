import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import TwitchVideoEmbed from './components/TwitchVideoEmbed';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import TwitchChatEmbed from './components/TwitchChatEmbed';

interface RouterProps {
  id: string | undefined;
}

type StreamPageProps = {};

class StreamPage extends React.Component<
  RouteComponentProps<RouterProps> & StreamPageProps,
  {}
> {
  async componentDidMount() {
    const { match } = this.props;

    console.log('match', match);
  }

  render() {
    const { match } = this.props;
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
          <RightCol>
            <TwitchChatEmbed url={urlChat} />
          </RightCol>
        </Content>
      </Page>
    );
  }
}

const Content = styled.div`
  display: flex;
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
