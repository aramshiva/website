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
            <p className="font-mono text-3xl">asd</p>
            <Twemoji text="🌎" />
          </Container>
        </Layout>
      </>
    )
  }