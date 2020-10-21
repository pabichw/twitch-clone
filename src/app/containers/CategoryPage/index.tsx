import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { Game, Stream } from '../../../types/Twitch';
import { RootState } from '../../../types';

import {
  getCategoryStreams,
  getGame,
} from '../../../store/categoryPage/actions';
import CategoryHeader from './components/CategoryHeader';
import StreamsContainer from './components/StreamsContainer';

interface RouterProps {
  catName: string | undefined;
}

interface CategoryPageProps {
  isLoading: boolean;
  game: Game | null;
  streams: Array<Stream> | [];
  getCategoryStreams: ({ catId: string }) => void;
  getGame: ({ catName: string, onSuccess: Function }) => void;
}

interface CategoryPageState {}

class CategoryPage extends React.Component<
  RouteComponentProps<RouterProps> & CategoryPageProps,
  CategoryPageState
> {
  async componentDidMount() {
    const {
      match: { params },
      getCategoryStreams,
      getGame,
    } = this.props;

    const { catName } = params;
    console.log('fetch for game', catName);
    getGame({
      catName,
      onSuccess: game => {
        getCategoryStreams({ catId: game?.id });
      },
    });
  }

  handleStreamThumbClick = (s: Stream) => {
    const { history } = this.props;
    history.push(`/${s.user_name}`);
  };

  render() {
    const {
      match: { params },
      isLoading,
      streams,
      game,
    } = this.props;
    const { catName } = params;

    return (
      <Page
        htmlProps={{ id: 'page-search' }}
        title={`${catName} Streams`}
        metaTags={[
          { name: 'title', content: 'Category Results' },
          { name: 'description', content: 'Category Page' },
        ]}
      >
        <Content>
          <CategoryHeader category={game} isLoading={isLoading} />
          <Main>
            <StreamsContainer
              streams={streams}
              loading={isLoading}
              onThumbClick={this.handleStreamThumbClick}
            />
          </Main>
        </Content>
      </Page>
    );
  }
}

const Content = styled.div`
  margin: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
`;

const mapState = (state: RootState) => ({
  game: state.categoryPage.game,
  streams: state.categoryPage.streams,
  isLoading: state.categoryPage.isLoading,
});

const mapDispatch = {
  getCategoryStreams,
  getGame,
};

export default connect(mapState, mapDispatch)(CategoryPage);
