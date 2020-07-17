import Head from 'next/head'
import Layout from '../components/Layout.js'
import Header from '../components/Header.js'

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <Layout>
          <Header>
            {/* Banner */}
              <a href="[[~24]]">
                <section id="banner">
                  <header>
                    <h2>[[*longtitle]]</h2>
                    <p>[[*introtext]]</p>
                  </header>
                </section>
              </a>
          </Header>
        </Layout>
    <footer>

    </footer>
  </div>
)

export default Home
