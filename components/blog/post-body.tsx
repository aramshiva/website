import markdownStyles from "./markdown-styles.module.css";

type Props = {
   content: string;
};

const PostBody = ({ content }: Props) => {
   return (
      <div className="mx-auto max-w-2xl">
         <article className="prose lg:prose-xl prose-stone">
            <div
               className={markdownStyles["markdown"]}
               dangerouslySetInnerHTML={{ __html: content }}
            />
         </article>
      </div>
   );
};

export default PostBody;
