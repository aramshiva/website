import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Twemoji from '../Twemoji'

export default function Index() {

    return (
      <>
        <Layout>
          <Head>
            <title>{`👋`}</title>
          </Head>
          <Container>
            <Header></Header>
            <p class="font-mono text-3xl"></p>
            <Twemoji class="width-1"text="Hello World 🌎" />
          </Container>
        </Layout>
      </>
    )
  }