import Container from "../../components/blog/container";
import Posts from "../../components/blog/posts";
import Layout from "../../components/blog/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../blog/interfaces/post";
import Wrapper from "../../components/wrapper";

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
                  <div className="block pb-20 text-xl font-semibold sm:text-3xl">
                     <h1>Blog</h1>
                  </div>
                  <Posts posts={allPosts} />
               </Container>
            </Layout>
         </Wrapper>
      </>
   );
}

export const getStaticProps = async () => {
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
