import Menu from './Menu.js'

export default function Header({children}) {
  return (
        <section id="header">
            {/* Tittle */}
              <h1><a href="/">Театр-студия ГлазАлмаз</a></h1>
              <Menu />
              {children}
        </section>
  )
}