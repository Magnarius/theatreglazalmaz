import Head from 'next/head'
import Layout from '../components/Layout.js'
import Header from '../components/Header.js'

export default function Contacts() {
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