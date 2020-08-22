import Layout from '../components/Layout.js'

const Home = () => {

  const indianMovie = (
    <a href="[[~24]]">
      <section id="banner">
        <header>
          <h2>Индийское кино</h2>
          <p>бомбический спектакль</p>
        </header>
      </section>
    </a>
  )

  return (
    <Layout
      title='Главная'
      banner={indianMovie}
    >


    </Layout>
  )
}
export default Home
