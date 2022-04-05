import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/Theme'
import GlobalStyle from '@/styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
