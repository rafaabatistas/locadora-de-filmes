import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <title>Locadora de Filmes</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
