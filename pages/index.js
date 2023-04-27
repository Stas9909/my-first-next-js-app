import Head from 'next/head'//Head позволяет управлять мета-данными страницы
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import MainLayout from '@/components/MainLayout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>burgers | MainPage</title>
        <meta name="title" content="burgers, burgers, burgers" />
        <meta charSet="utf-8"/>
      </Head>

      <div className={styles.wrapper}>
        <h1 className={`${styles.title} font-effect-neon`}>MainPage</h1>
        <div className={styles.mainImage}>
          <Image src="/purple_burger.jpg" alt="purple burger" width={300} height={200} />
        </div>
        <p className={styles.text}>Burgers sure are delicious and considering that 50 billion of them are consumed per year in our country, that means on average you eat one every 3 days. 60% of all sandwiches sold in the country are Burgers. So with more than 50,000 Burgercentric joints for us to consider eating from, it’s no surprise that the Burger is America’s favorite thing to eat.</p>
        <Link href={'/burgers'}><div className={styles.btn}>All burgers</div></Link>
      </div>
    </>
  )
}
