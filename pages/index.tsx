import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Twemoji from '../components/twemojirenderer'
import Link from 'next/link'

export default function Index() {

    return (
      <>
        <Layout>
          <Head>
            <title>{`👋`}</title>
          </Head>
          <Container>
            <Header />
            <div className="flex text-5xl font-mono"><Twemoji text="👋" /><div>Hello</div></div>
            <p className="text-4xl font-mono">I'm Aram</p>
            <p className="text-3xl font-mono">This Website is under construction right now. But visit my <Link href="/blog" className="hover:underline underline decoration-indigo-500">Blog (click here)</Link></p>
          </Container>
        </Layout>
      </>
    )
  }