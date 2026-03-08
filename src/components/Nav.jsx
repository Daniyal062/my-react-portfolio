import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${stuck ? styles.stuck : ''}`}>
      <a className={styles.logo} href="#">
        Daniyal Maqsood
        <span className={styles.avail}>Available</span>
      </a>
      <div className={styles.right}>
        <a className={styles.link} href="#uiux">Work</a>
        <a className={styles.link} href="#fullstack">Full&nbsp;Stack</a>
        <a className={styles.link} href="#about">About</a>
        <a className={styles.link} href="#contact">Contact</a>
      </div>
    </nav>
  )
}
