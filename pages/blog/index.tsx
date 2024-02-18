import Container from "../../components/blog/container";
import MoreStories from "../../components/blog/more-stories";
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
                  <div className="block text-xl font-semibold sm:text-3xl pb-20">
                     <h1>Blog</h1>
                  </div>
                  <MoreStories posts={allPosts} />
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
