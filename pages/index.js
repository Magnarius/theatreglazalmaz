import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Menu from '../components/menu'
import Header from '../components/header'

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
