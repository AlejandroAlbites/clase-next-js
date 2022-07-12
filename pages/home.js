import React from 'react'
import Link from "next/link";
import styles from '../styles/claseNext.module.css'

const Home = () => {
  return (
    <div className={styles.div_container}>
        <h2>Home</h2>
        <Link href='/products'>
                  <a className={styles.aButton}>Ir a personajes</a>
        </Link>
    </div>
  )
}



export default Home
