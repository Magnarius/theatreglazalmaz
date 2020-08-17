import ActiveLink from './ActiveLink'

const Menu = () => {
  return (
    <nav id="nav">
      <ul className="">
        <li>
          <ActiveLink activeClassName="active" href="/">
            <a href="/">Главная</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/groups">
            <a href="/groups">Группы</a>
          </ActiveLink>
        </li>
        <li >
          <ActiveLink activeClassName="active" href="/timetable">
            <a href="/timetable">Расписание</a>
          </ActiveLink>
        </li>
        <li >
          <ActiveLink activeClassName="active" href="/prices">
            <a href="/prices">Стоимость</a>
          </ActiveLink>
        </li>
        <li >
          <ActiveLink activeClassName="active" href="/perfomances">
            <a href="/perfomances">Спектакли</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/contacts">
            <a href="/contacts">Контакты</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>

  )
}

export default Menu
