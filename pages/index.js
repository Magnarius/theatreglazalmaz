import Head from 'next/head'
import Layout from '../components/Layout.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const Home = () => (
        <Layout>
          <Head>
            <title>Театр-студия ГлазАлмаз</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header>
            {/* Banner */}
              <a href="[[~24]]">
                <section id="banner">
                  <header>
                    <h2>Индийское кино</h2>
                    <p>бомбический спектакль</p>
                  </header>
                </section>
              </a>
          </Header>
          <Footer></Footer>
        </Layout>
)

export default Home
