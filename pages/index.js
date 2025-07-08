import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WoojinChemical</title>
        <meta name="description" content="우진케미칼 웹사이트" />
      </Head>

      <header>
        <h1>WoojinChemical</h1>
      </header>

      <main>
        <section className={styles.about}>
          <h2>About Us</h2>
          <p>
            WoojinChemical specializes in innovative chemical solutions. We are
            committed to providing high‑quality products that meet diverse
            industry needs.
          </p>
        </section>

        <section className={styles.services}>
          <h2>Services</h2>
          <ul>
            <li>Custom chemical formulations</li>
            <li>Research and development</li>
            <li>Technical consulting</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>Contact us: info@woojinchemical.com | +82-2-1234-5678</p>
      </footer>
    </div>
  )
}
