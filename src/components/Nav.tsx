import { A } from 'solid-start'
import styles from './Nav.module.scss'

function Nav() {
  return (
    <nav class={styles.nav}>
      <A href="/">HOME</A>
      <A href="/about">ABOUT</A>
    </nav>
  )
}

export default Nav
