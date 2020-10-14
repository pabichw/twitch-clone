import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../../../styles/media';
import { ChannelSearchResult } from '../../../types/Twitch';
import { RootState } from '../../../types';
import { getSearchResults } from '../../../store/searchPage/actions';
import qs from 'query-string';
import Section from '../../components/Section';
import {
  LoadingPlaceholder,
  Placeholder,
} from '../../components/Placeholders/LoadingPlaceholder';
import ChannelsList from './components/ChannelsList';

interface RouterProps {
  query: string | undefined;
}

interface SearchPageProps {
  getSearchResults: ({ query: string }) => void;
  channels: Array<ChannelSearchResult>;
  isLoading: boolean;
}

interface SearchPageState {}

class SearchPage extends React.Component<
  RouteComponentProps<RouterProps> & SearchPageProps,
  SearchPageState
> {
  async componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ isMobile: window.innerWidth < MOBILE_BREAKPOINT });
    });
    const {
      location: { search },
      getSearchResults,
    } = this.props;

    const { query } = qs.parse(search);
    await getSearchResults({ query });
  }

  handleChannelClick = (ch: ChannelSearchResult) => {
    const { history } = this.props;
    history.push(`/${ch.display_name}`);
  };

  render() {
    const { channels, match, isLoading } = this.props;
    const { query } = match.params;

    const loadingPlaceholders = new Array(7).fill(null).map((ch, k) => (
      <PlaceholderWrapper>
        <LoadingPlaceholder
          type={Placeholder.CHANNEL_LIST_ITEM}
          key={`ch-${k}`}
        />
      </PlaceholderWrapper>
    ));

    return (
      <Page
        htmlProps={{ id: 'page-search' }}
        title={`Search ${query}`}
        metaTags={[
          { name: 'title', content: 'Search Results' },
          { name: 'description', content: 'Search Results Page' },
        ]}
      >
        <Content>
          <Column>
            <Section
              title="Channels"
              placeholder={isLoading && loadingPlaceholders}
            >
              <ChannelsList
                channels={channels}
                onMainImageClick={this.handleChannelClick}
                onHeaderClick={this.handleChannelClick}
              />
            </Section>
          </Column>
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

const Column = styled.div`
  width: 100%;
  max-width: 1280px;
`;

const PlaceholderWrapper = styled.div`
  margin-bottom: 15px;
`;

const mapState = (state: RootState) => ({
  channels: state.searchPage.channels,
  isLoading: state.searchPage.isLoading,
});

const mapDispatch = {
  getSearchResults,
};

export default connect(mapState, mapDispatch)(SearchPage);
