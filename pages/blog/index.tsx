import Container from "../../components/blog/container";
import MoreStories from "../../components/blog/more-stories";
import HeroPost from "../../components/blog/hero-post";
import Layout from "../../components/blog/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../blog/interfaces/post";
import Alert from "../../components/alert";

type Props = {
    allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{`Aram's Blog`}</title>
                </Head>
                <Container>
                    <div className="prose pb-9">
                        <h1>Blog</h1>
                    </div>
                    <MoreStories posts={allPosts} />
                </Container>
            </Layout>
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
