import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Layout({ children, title = 'Театр-студия', banner }) {
  return (
    <div id="page-wrapper">
      <Head>
        <title>{title} | ГлазАлмаз</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header banner={banner} />
      <section id={'main'}>{children}</section>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
