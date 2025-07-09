import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>WoojinChemical</title>
        <meta name="description" content="우진케미칼 웹사이트" />
      </Head>
      <div className={styles['chem-container']}>
        <header className={styles['chem-nav']}>
          <nav>
            <ul className={styles['chem-nav-list']}>
              <li><a href="#intro">Company</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <div className={styles['chem-banner']}>
          <div className={styles['chem-banner-parallelogram']}></div>
        </div>
        <section className={styles['chem-hero']}>
          <h1>Welcome to WoojinChemical</h1>
          <p>Leading innovations in chemical solutions.</p>
        </section>
        <section id="intro" className={styles['chem-intro']}>
          <h2>About Us</h2>
          <p>WoojinChemical is committed to providing high-quality chemical products to industries worldwide. Our team of experts ensures safe and efficient solutions tailored to your needs.</p>
        </section>
        <section id="products" className={styles['chem-products']}>
          <h2>Our Products</h2>
          <ul className={styles['chem-products-list']}>
            <li className={styles['chem-product-item']}>Industrial Solvents</li>
            <li className={styles['chem-product-item']}>Cleaning Agents</li>
            <li className={styles['chem-product-item']}>Custom Formulations</li>
          </ul>
        </section>
        <section id="contact" className={styles['chem-contact']}>
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </>
  )
}
