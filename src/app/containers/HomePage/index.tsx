import React from 'react';
import Page from '../../components/Page';

export function HomePage() {
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
