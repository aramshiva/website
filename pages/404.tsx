import Link from "next/link";
export default function Example() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-9 sm:py-20 lg:px-5 h-screen">
        <div className="font-mono rounded-lg w-fit">
          <p>██╗&nbsp;&nbsp;██╗&nbsp;██████╗&nbsp;██╗&nbsp;&nbsp;██╗</p>
          <p>██║&nbsp;&nbsp;██║██╔═████╗██║&nbsp;&nbsp;██║</p>
          <p>███████║██║██╔██║███████║</p>
          <p>╚════██║████╔╝██║╚════██║</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║╚██████╔╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝&nbsp;╚═════╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝</p>
        </div>
        <div>
          <p className="font-mono">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-mono"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
      <div className="rainbow h-6 sticky bottom-0" />
    </>
  );
}
