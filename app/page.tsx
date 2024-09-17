import Site from "@/app/mdx-page/site.mdx";
import Header from "@/app/components/nav";

export default function Home() {
  return (
    <>
      <div className="px-20 pb-20">
        <Header />
        <div className="prose prose-slate">
          <Site />
        </div>
      </div>
    </>
  );
}
