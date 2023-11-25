import { AppProps } from 'next/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  // return <div className="bg-white dark:bg-gray-800 text-slate-900 dark:text-white"><Component {...pageProps} /></div>
  return <div className='bg-black text-white'><Component {...pageProps} /></div>
}