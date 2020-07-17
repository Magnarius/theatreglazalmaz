import Menu from './menu'

export default function Header({children}) {
  return (
        <section id="header">
            {/* Tittle */}
              <h1><a href="/">[[*pagetitle]]</a></h1>
              <Menu />
              {children}
        </section>
  )
}