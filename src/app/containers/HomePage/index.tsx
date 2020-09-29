import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import { HomeStore } from '../../../store/home/types';
import { getStreams } from '../../../store/home/actions';
import Section from './components/Section';
import { Stream } from '../../../types/Twitch';

type HomePageProps = {
  streams: Array<Stream>;
  fetchingStreams: boolean;
  getStreams: () => void;
};

class HomePage extends React.Component<HomePageProps, {}> {
  async componentDidMount() {
    const { getStreams } = this.props;
    getStreams();
  }

  render() {
    const { streams, fetchingStreams } = this.props;

    console.log('fetching ', fetchingStreams, 'streams', streams);
    return (
      <Page
        htmlProps={{ id: 'page-home' }}
        title={'Home'}
        metaTags={[
          { name: 'title', content: 'Home Title' },
          { name: 'description', content: 'Some description' },
        ]}
      >
        <Section
          label="Live channels we think you’ll like"
          streams={streams}
          loading={fetchingStreams}
        />
      </Page>
    );
  }
}

const mapState = ({ home }: { home: HomeStore }) => ({
  streams: home.streams,
  fetchingStreams: home.isLoading,
});

const mapDispatch = {
  getStreams,
};
export default connect(mapState, mapDispatch)(HomePage);
