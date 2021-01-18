import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Layout({ children, title = 'Театр-студия', banner, needWrapper }) {
  return (
    <div id="page-wrapper">
      <Head>
        <title>{title} | ГлазАлмаз</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header banner={banner} />
      <section id={'main'}>
        <div className="container">
          <div className="row">
            <div className="col-8 col-12-medium">
              <section>
                <article className="box post">{children}</article>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
