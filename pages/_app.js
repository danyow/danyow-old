import '../styles.css'
import 'nextra-theme-docs/style.css'

export default function app({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
