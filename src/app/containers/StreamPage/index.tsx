import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import TwitchVideoEmbed from './components/TwitchVideoEmbed';
import { RouteComponentProps } from 'react-router-dom';

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

    const url = `https://player.twitch.tv/?channel=${id}&parent=${window.location.hostname}`;
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
        <TwitchVideoEmbed url={url} />
      </Page>
    );
  }
}

const mapState = () => ({});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(StreamPage);
