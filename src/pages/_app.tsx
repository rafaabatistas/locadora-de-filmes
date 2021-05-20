import '../styles/global.scss';
import ContextProviders from '../contexts/contextUtils/providers';

import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <ContextProviders>
        <Component {...pageProps} />
      </ContextProviders>
    </main>
  );
}

export default MyApp;
