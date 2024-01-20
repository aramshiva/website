import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Aram Shiva" />
      <meta property="og:url" content="https://aram.sh" />
      <meta
        property="og:image"
        content="https://cloud-3ri5zqk55-hack-club-bot.vercel.app/0aramshiva.png"
      />
      <meta
        property="og:description"
        content="Aram Shiva is a teenager in Seattle who is crafting internet experiences."
      />
      <meta property="profile:first_name" content="Aram" />
      <meta property="profile:last_name" content="Shiva" />
      <meta property="profile:username" content="aramshiva" />
    </Head>
  );
};

export default Meta;
