import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/static/images/favicon.ico" />
          <meta name="viewport" content="width=device-width" />
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link rel="stylesheet" type="text/css" href="/static/sanitize.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/input-range.css"
          />
          {/* Import CSS is generated from styled-components */}
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
