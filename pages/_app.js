import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MainLayout from '@/components/MainLayout'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <NextNProgress
        color="#29D"
        startPosition={0.3}//прогрессбар начнет появляться с 30% загрузки,что значит 
        // stopDelayMs={100}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </MainLayout>

  )
}
