import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>WoojinChemical</title>
        <meta name="description" content="우진케미칼 웹사이트" />
      </Head>
      <div className={styles.banner}>
        <div className={styles.parallelogram}></div>
      </div>
    </>
  )
}
