import Site from '@/app/mdx-page/site.mdx'
import Spotify from '@/app/components/spotify'

export default function Home() {
  return (
    <>
    <div className="p-20 prose prose-slate">
      <Site />
      <Spotify />
    </div>
    </>
  );
}