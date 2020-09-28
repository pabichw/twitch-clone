import React from 'react';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import { HomeStore } from '../../../store/home/types';
import { getStreams } from '../../../store/home/actions';
import Section from './components/Section';

type HomePageProps = {
  home: HomeStore;
  getStreams: () => void;
};

class HomePage extends React.Component<HomePageProps, {}> {
  async componentDidMount() {
    const { getStreams } = this.props;
    getStreams();
  }

  render() {
    const {
      home: { streams },
    } = this.props;

    return (
      <Page
        htmlProps={{ id: 'page-home' }}
        title={'Home'}
        metaTags={[
          { name: 'title', content: 'Home Title' },
          { name: 'description', content: 'Some description' },
        ]}
      >
        {streams && (
          <Section
            label="Live channels we think you’ll like"
            streams={streams}
          />
        )}
      </Page>
    );
  }
}

const mapState = ({ home }: { home: HomeStore }) => ({
  home,
});

const mapDispatch = {
  getStreams,
};
export default connect(mapState, mapDispatch)(HomePage);
