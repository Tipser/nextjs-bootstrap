import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Product, Cart } from '@tipser/tipser-elements'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Cart />
        <Product productId="5cd136757e7f8900019f35a8" viewMode="compact" />
      </main>
    </div>
  )
}
