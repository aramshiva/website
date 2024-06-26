import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../../../components/blog/container";
import PostBody from "../../../../components/blog/post-body";
import PostHeader from "../../../../components/blog/post-header";
import Layout from "../../../../components/blog/layout";
import Head from "next/head";
import PostTitle from "../../../../components/blog/post-title";
import { getPostBySlug, getAllPosts } from "../../../../lib/api";
import markdownToHtml from "../../../../lib/markdownToHtml";
import Wrapper from "../../../../components/wrapper";
import type PostType from "../../../../blog/interfaces/post";

type Props = {
   post: PostType;
   morePosts: PostType[];
   preview?: boolean;
};

export default function Post({ post, preview }: Props) {
   const router = useRouter();
   const title = `${post?.title ?? "Loading..."} | Aram's Blog`;

   if (!router.isFallback && !post?.slug) {
      return <ErrorPage statusCode={404} />;
   }
   return (
      <>
         <Wrapper key={post?.slug}>
            <Layout preview={preview}>
               <Container>
                  {router.isFallback ? (
                     <PostTitle>Loading…</PostTitle>
                  ) : (
                     <>
                        <article className="mb-32">
                           <Head>
                              <title>{title}</title>
                              <meta
                                 property="og:image"
                                 content={post?.ogImage?.url}
                              />
                           </Head>
                           <PostHeader
                              title={post?.title}
                              coverImage={post?.coverImage}
                              date={post?.date}
                              author={post?.author}
                           />
                           <PostBody content={post?.content} />
                        </article>
                     </>
                  )}
               </Container>
            </Layout>
         </Wrapper>
      </>
   );
}

type Params = {
   params: {
      slug: string;
   };
};

export async function getStaticProps({ params }: Params) {
   const post = getPostBySlug(params.slug, [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
   ]);
   const content = await markdownToHtml(
      post?.content || "Error! Looks like the content couldn't load!",
   ); // Add nullish coalescing operator

   return {
      props: {
         post: {
            ...post,
            content,
         },
      },
   };
}

export async function getStaticPaths() {
   const posts = getAllPosts(["slug"]);

   return {
      paths: posts.map((post) => {
         return {
            params: {
               slug: post.slug,
            },
         };
      }),
      fallback: true,
   };
}
