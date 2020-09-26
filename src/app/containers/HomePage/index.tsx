import React from 'react';
import Page from '../../components/Page';

type HomePageProps = {};

export class HomePage extends React.Component<HomePageProps, {}> {
  async componentDidMount() {}

  render() {
    return (
      <Page
        title={'Home'}
        metaTags={[
          { name: 'title', content: 'Home Title' },
          { name: 'description', content: 'Some description' },
        ]}
      >
        <span>HomePage container</span>
      </Page>
    );
  }
}
