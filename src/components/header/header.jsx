import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <header>
        <h1>ASKLUCK</h1>
        <nav>
          <button className={styles.btn}>
          <a href="#">만세력</a>
          </button>
          <button className={styles.btn}>
          <a href="https://askluck.net">blog</a>
          </button>
        </nav>
    </header>
  )
}

export default Header