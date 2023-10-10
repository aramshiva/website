import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
