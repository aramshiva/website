import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <meta property="og:type" content="profile"/>
      <meta property="og:title" content="Aram Shiva"/>
      <meta property="og:url" content="https://aram.sh"/>
      <meta property="og:image" content="/aramshiva.png"/>
      <meta property="og:description" content="Aram is a student based in Seattle, Washington. He likes to develop, create and inspire."/>
      <meta property="profile:first_name" content="Aram"/>
      <meta property="profile:last_name" content="Shiva"/>
      <meta property="profile:username" content="aramshiva"/>
    </Head>
  )
}

export default Meta
