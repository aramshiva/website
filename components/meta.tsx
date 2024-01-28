import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "👋 Aram Shiva";
  const description = "student. developer. designer.";
  const keywords =
    "aram, shiva, aram shiva, seattle, washington, kenmore, design, designer, developer, programmer, html, css, js, node, express, react, next, javascript, student, nextjs, vercel";
  const author = "Aram Shiva";
  const image =
    "https://cloud-3ri5zqk55-hack-club-bot.vercel.app/0aramshiva.png";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="https://aram.sh" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </Head>
  );
}
