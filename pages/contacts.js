import Head from 'next/head';
import Layout from '../components/Layout.js';
import Header from '../components/Header.js';
import PhoneNumber from '../components/PhoneNumber.js';

export default function Contacts() {
  return (
    <Layout title="Контакты">
      <h3>Адрес:</h3>
      <p>Россия, Москва, Измайловский бульвар, 60/10</p>
      <h3>Телефон:</h3>
      <p>
        <span>
          <PhoneNumber />
        </span>
      </p>
      <h3>Адрес электронной почты:</h3>
      <p>nzkoz@yandex.ru</p>
      <p> </p>
      <p>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A861371edb2610d620888ed76ff713673305a1f47ce497e33a28ee788446ba319&amp;source=constructor"
          frameborder="0"
          width="100%"
          height="240"
        ></iframe>
      </p>
    </Layout>
  );
}
