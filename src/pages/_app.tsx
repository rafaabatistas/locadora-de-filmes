import '../styles/global.scss';

import Head from 'next/head';

import ContextProviders from '../contexts/contextUtils/providers';

import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Locadora de Filmes</title>
      </Head>
      <main>
        <Header />
        <ContextProviders>
          <Component {...pageProps} />
        </ContextProviders>
      </main>
    </>
  );
}

export default MyApp;
