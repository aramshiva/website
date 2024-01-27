import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "dompurify";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const sanitizedTitle = DOMPurify.sanitize(title); // Sanitize the title prop

  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("w-full shadow-sm", {
        "bg-contain transition-shadow duration-200 hover:shadow-lg": slug,
      })}
      width={1000}
      height={1000}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          as={`/blog/posts/${DOMPurify.sanitize(slug)}`}
          href="/blog/posts/[slug]"
          aria-label={sanitizedTitle} // Use the sanitized title prop
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
