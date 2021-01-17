import Layout from '../components/Layout.js'
import PhoneNumber from '../components/PhoneNumber.js'

const Home = () => {

  const indianMovie = (
    <a href="/">
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
      wrapper={true}
    >
      <h2>Мы кто</h2>
      <p>Живой театр, где "не играют". Любим, когда внешняя оболочка человека лопается и "бомбит". Исповедуем Любовь, как основной принцип жизни. В нашем микроклимате любят, прощают, договариваются и сообща работают.</p>
      <h3>Работаем с детьми от 5 лет</h3>
      <p>Дети занимаются до 5 дней в неделю. Учатся акт.мастерству, сцен.речи, вокалу и современному танцу.</p>
      <p>3 группы:</p>
      <ul>
        <li><a href="/">Младшая 5-7 лет</a></li>
        <li><a href="/">Средняя 7-10 лет</a></li>
        <li><a href="/">Старшая 10-16 лет</a></li>
      </ul>
      <h3>Работаем со взрослыми</h3>
      <p>Взрослые делают спектакли, репетируют по договорённости.<br />Фиксированных показов нет — сделали спектакль и играем.<br /><a href="[[~23]]">Подробнее</a></p>
      <h3>Если возникли вопросы — пишите, ответим:</h3>
      <p>nzkoz@yandex.ru<br /><PhoneNumber /></p>

    </Layout>
  )
}
export default Home
