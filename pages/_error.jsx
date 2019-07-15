import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.h1`
  text-align: center;
  font-weight: 500;
`;

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null; // eslint-disable-line no-nested-ternary
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <ErrorStyle>
        {statusCode
          ? `An error ${statusCode} occurred on server!`
          : 'An error occurred on client!'}
      </ErrorStyle>
    );
  }
}
