import React from 'react';
import Home from 'containers/Home';
import Layout from 'containers/Layout';

class Index extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <Home />
        </Layout>
      </>
    );
  }
}

export default Index;
