import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../../blog/interfaces/author";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, excerpt, slug }: Props) => {
  const encodedSlug = encodeURIComponent(slug);

  return (
    <section>
      <Link
        key={slug}
        className="flex flex-col"
        href={{
          pathname: "/blog/posts/[slug]",
          query: { slug },
        }}
        as={{
          pathname: `/blog/posts/${encodedSlug}`,
        }}
      >
        <div className="flex w-full flex-col">
          <p className="tracking-tight text-neutral-900">{title}</p>
          <p className="text-sm tracking-tight text-neutral-900">{excerpt}</p>
        </div>
      </Link>
    </section>
  );
};

export default PostPreview;
