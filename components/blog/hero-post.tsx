import DateFormatter from "./date-formatter";
import Link from "next/link";
import type Author from "../../blog/interfaces/author";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const HeroPost = ({ title, date, excerpt, slug }: Props) => {
  return (
    <section>
      <hr className="my-4 border-gray-300" />
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-2xl leading-tight lg:text-3xl">
            <Link
              href={{
                pathname: "/blog/posts/[slug]",
                query: { slug },
              }}
              as="/blog/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="text-sm">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-sm">{excerpt}</p>
        </div>
      </div>
      <hr className="my-1 border-gray-300" />
    </section>
  );
};

export default HeroPost;
