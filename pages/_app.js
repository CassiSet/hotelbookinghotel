import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { SessionProvider } from 'next-auth/react';
// import { Provider } from 'react-redux';
// import store from '../redux/store';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
