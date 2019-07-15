import React from 'react';
import Layout from '../containers/Layout';
import Story from '../containers/TruyenNoi';

class TruyenNoi extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    return { id };
  }

  render() {
    const { id } = this.props;
    return (
      <>
        <Layout>
          <Story id={id} />
        </Layout>
      </>
    );
  }
}

export default TruyenNoi;
