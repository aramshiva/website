import PostPreview from "./post-preview";
import type Post from "../../blog/interfaces/post";

type Props = {
    posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
    return (
        <section>
            <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        slug={post.slug}
                        date={post.date}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    );
};

export default MoreStories;
