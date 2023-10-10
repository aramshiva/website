import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Twemoji from '../components/twemojirenderer'

export default function Index() {

    return (
      <>
        <Layout>
          <Head>
            <title>{`👋`}</title>
          </Head>
          <Container>
            <Header />
            <div className="flex text-9xl font-mono dark:text-sky-450"><Twemoji text="👋" /><div>Hello</div></div>
            <p className="text-5xl font-mono dark:text-size-300">I'm Aram</p>
          </Container>
        </Layout>
      </>
    )
  }