import Container from "../../components/blog/container";
import Posts from "../../components/blog/posts";
import Layout from "../../components/blog/layout";
import { getAllPosts } from "../../lib/api";
import generateRssFeed from "../../blog/utils/generateRSSFeed.js";
import Head from "next/head";
import Post from "../../blog/interfaces/post";
import Wrapper from "../../components/wrapper";
import Link from "next/link";
import Image from "next/image";

type Props = {
   allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
   return (
      <>
         <Wrapper>
            <Layout>
               <Head>
                  <title>{`Blog`}</title>
               </Head>
               <Container>
                  <h1 className="mb-4 block text-xl font-bold sm:text-3xl">
                     Blog
                  </h1>
                  <Posts posts={allPosts} />
               </Container>
               <footer className="sticky bottom-0 p-20">
                  <Link href="/blog/rss.xml">
                     <Image
                        src="/blog/rsslogo.svg"
                        width={24}
                        height={24}
                        alt="RSS"
                     />
                  </Link>
               </footer>
            </Layout>
         </Wrapper>
      </>
   );
}

export const getStaticProps = async () => {
   await generateRssFeed();
   const allPosts = getAllPosts([
      "title",
      "date",
      "slug",
      "author",
      "coverImage",
      "excerpt",
   ]);

   return {
      props: { allPosts },
   };
};
