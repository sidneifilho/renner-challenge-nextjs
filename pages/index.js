import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Renner Challenge</title>
        <meta name="description" content="Renner challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Renner front end challenge</h1>
        <h2>Technologies to be used:</h2>
        <p>- React/NextJS</p>
        <p>- NodeJS</p>
        <p></p>

        <br />
        <h1>Create the following pages with layouts of your choice.</h1>
        <p>- Home page</p>
        <p>- Product Page</p>
        <p>- Create a Header and Footer of your choice.</p>

        <br />
        <h1>Given the following scenarios, you will create and consume 2 enpoints.</h1>

        <h2>1) Consultation by product code. </h2>
        <p>- Build a product page with addtoCart option</p>
        <p>- Products page should contain price.</p>
        <p>- Products page should contain description.</p>
        <p>- Product page should contain product name.</p>
        <p>- Products page should have add to cart buttons.</p>
        <p>- The products page must contain stock validation (if you do not have stock, remove option to add to cart).</p>
        <p>- Products page should contain summary.</p>
        <p>- Products page should have an image of your choice.</p>

        <h2>2) Consult all products </h2>
        <p>- Set up a Home page where you have a caroussel with addtoCart option</p>
        <p>- The home page should have a banner with the lowest price product.</p>
        <p>- The home page should contain a caroussel with all products.</p>
        <p>- The home page should contain stock validation (if you do not have stock, remove option to add to cart).</p>

        <br />
        <h1>IMPORTANT :</h1>

        <h2>After completing the test, send your github link to the emails below.. </h2>
        <ul>
          <li> andre.massafra@lojasrenner.com.br </li>
          <li> felipe.rodrigues@lojasrenner.com.br </li>
          <li> sidnei.filho@lojasrenner.com.br </li>
          <li> christian.trajano@lojasrenner.com.br </li>
        </ul> 
      </main>

      <footer className={styles.footer}>
          Powered by Renner
      </footer>
    </div>
  )
}
