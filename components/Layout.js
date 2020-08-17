import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function Layout({ children }) {

  return (
    <div id="page-wrapper">
      <Head>
        <title>Театр-студия ГлазАлмаз</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <section id={"main"}>
        {children}
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Layout
