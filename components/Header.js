import Menu from './Menu.js'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import HamburgerIcon from './HamburgerIcon'
import CheeseburgerMenu from './CheeseburgerMenu.js'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  // openMenu() {
  //   this.setState({ menuOpen: true })
  // }

  // closeMenu() {
  //   this.setState({ menuOpen: false })
  // }

  handleClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <section id="header" >
        {/* Tittle */}
        <h1>
          <Link href="/">
            <a href="/">Театр-студия ГлазАлмаз</a>
          </Link>
        </h1>
        <Menu />
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.handleClick.bind(this)}
        >
          <nav>
            <ActiveLink activeClassName="active" href="/">
              <a className={"link depth-0"} href="/" >
                <span className={"indent-0"}></span>Главная
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/groups">
              <a className={"link depth-0"} href="/groups">
                <span className={"indent-0"}></span>Группы
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/timetable">
              <a className={"link depth-0"} href="/timetable">
                <span className={"indent-0"}></span>Расписание
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/prices">
              <a className={"link depth-0"} href="/prices">
                <span className={"indent-0"}></span>Стоимость
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/perfomances">
              <a className={"link depth-0"} href="/perfomances">
                <span className={"indent-0"}></span>Спектакли
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/contacts">
              <a className={"link depth-0"} href="/contacts">
                <span className={"indent-0"}></span>Контакты
              </a>
            </ActiveLink>
          </nav>
        </CheeseburgerMenu>
        <HamburgerIcon
          isOpen={this.state.menuOpen}
          menuClicked={this.handleClick.bind(this)}
        />
        {this.props.banner}
      </section >
    )
  }
}

export default Header