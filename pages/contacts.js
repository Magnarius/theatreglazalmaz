import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'

function Contacts() {
  return (
    <Layout>
      <Head>
        <title>Контакты</title>
      </Head>
      <Header />
      <div>Contacts</div>
    </Layout>
  )
}

export default Contacts
