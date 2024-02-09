import Link from "next/link";

type Props = {
   title: string;
   excerpt: string;
   slug: string;
   date: string;
};

const PostPreview = ({ title, excerpt, slug, date }: Props) => {
   const encodedSlug = encodeURIComponent(slug);

   return (
      <section>
         <Link
            key={encodedSlug}
            className="flex flex-col"
            href={{
               pathname: "/blog/posts/[slug]",
               query: { slug },
            }}
            as={{
               pathname: "/blog/posts/[slug]",
               query: { slug },
            }}
         >
            <div className="flex-wrap">
               <div className="flex flex-col">
                  <p className="tracking-tight text-neutral-900">{title}</p>
                  <p className="text-sm tracking-tight text-neutral-900">
                     {excerpt}
                  </p>
                  <p className="text-sm tracking-tight text-neutral-900">
                     {date}
                  </p>
               </div>
            </div>
         </Link>
      </section>
   );
};

export default PostPreview;
