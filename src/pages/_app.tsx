import 'styles/fonts.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import { AnimateSharedLayout } from 'framer-motion'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>PokeNext</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Your optimized Pokédex, in server side rendering."
        />
      </Head>
      <AnimateSharedLayout>
        <GlobalStyles />
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default App
