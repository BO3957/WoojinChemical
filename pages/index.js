import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shapes Demo</title>
        <meta name="description" content="Simple shapes page" />
      </Head>
      <div className={styles.container}>
        <div className={styles.rectangle}></div>
        <div className={styles.parallelogram}></div>
      </div>
    </>
  )
}
