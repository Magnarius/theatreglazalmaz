import Menu from './menu'

function Header({children}) {
  return (
        <section id="header">
            {/* Tittle */}
              <h1><a href="/">[[*pagetitle]]</a></h1>
              <Menu />
              {children}
        </section>
  )
}

export default Header
