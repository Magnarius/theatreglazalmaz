import Link from 'next/link'

function Menu() {
  return (
    <nav id="nav">
      <ul className="">
        <Link href="/">
          <li className="first current">
            <a href="/">Главная</a>
          </li>
        </Link>
        <Link href="/groups">
          <li>
            <a href="/groups">Группы</a>
          </li>
        </Link>
        <Link href="/timetable">
          <li >
            <a href="/timetable">Расписание</a>
          </li>
        </Link>
        <Link href="/prices">
          <li >
            <a href="/prices">Стоимость</a>
          </li>
        </Link>
        <Link href="/perfomances">
          <li >
            <a href="/perfomances">Спектакли</a>
          </li>
        </Link>
        <Link href="/contacts">
          <li className="last" >
            <a href="/contacts">Контакты</a>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Menu
