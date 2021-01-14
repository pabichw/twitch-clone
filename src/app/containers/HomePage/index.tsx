import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import { HomeStore } from '../../../store/home/types';
import { getGames, getStreams } from '../../../store/home/actions';
import SectionStreams from './components/SectionStream';
import { Game, Stream } from '../../../types/Twitch';
import SectionGames from './components/SectionGames';

type HomePageProps = {
  streams: Array<Stream>;
  games: Array<Game>;
  fetching: boolean;
  getStreams: () => void;
  getGames: () => void;
};

class HomePage extends React.Component<HomePageProps, {}> {
  async componentDidMount() {
    const { getStreams, getGames } = this.props;
    getStreams();
    getGames();
  }

  render() {
    const { streams, games, fetching } = this.props;

    return (
      <Page
        htmlProps={{ id: 'page-home' }}
        title={'Home'}
        metaTags={[
          { name: 'title', content: 'Home Title' },
          { name: 'description', content: 'Some description' },
        ]}
      >
        <SectionStreams
          label="Live channels we think you’ll like"
          streams={streams}
          loading={fetching}
        />
        <SectionGames label="Categories" games={games} loading={fetching} />
      </Page>
    );
  }
}

const mapState = ({ home }: { home: HomeStore }) => ({
  streams: home.streams,
  games: home.games,
  fetching: home.isLoading,
});

const mapDispatch = {
  getStreams,
  getGames,
};
export default connect(mapState, mapDispatch)(HomePage);
