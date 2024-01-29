import DateFormatter from "./date-formatter";
import Link from "next/link";
import type Author from "../../blog/interfaces/author";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};

const HeroPost = ({ title, excerpt, slug }: Props) => {
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
          pathname: "/blog/posts/",
          query: { slug },
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

export default HeroPost;
