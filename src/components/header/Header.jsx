import React from 'react'
import styles from './header.styles.module.scss'
const Header = () => {
  return (
    <header className={styles.header}>
    <h1>Welcome to Rick and Morty APP</h1>
    <nav>
      <ul className={styles.menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Characters</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header