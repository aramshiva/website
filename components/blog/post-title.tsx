import { ReactNode } from "react";

type Props = {
   children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
   return (
      <h1 className="mb-12 pt-20 text-center text-2xl font-black leading-tight tracking-tighter md:text-left md:text-3xl md:leading-none lg:text-5xl">
         {children}
      </h1>
   );
};

export default PostTitle;
