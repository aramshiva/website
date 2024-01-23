import Link from "next/link";
export default function Error() {
  return (
    <>
      <main className="grid h-screen min-h-full place-items-center px-6 py-9 sm:py-20 lg:px-5">
        <div className="w-fit rounded-lg font-mono">
          <p>██╗&nbsp;&nbsp;██╗&nbsp;██████╗&nbsp;██╗&nbsp;&nbsp;██╗</p>
          <p>██║&nbsp;&nbsp;██║██╔═████╗██║&nbsp;&nbsp;██║</p>
          <p>███████║██║██╔██║███████║</p>
          <p>╚════██║████╔╝██║╚════██║</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║╚██████╔╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝&nbsp;╚═════╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝
          </p>
        </div>
        <div>
          <p className="font-mono">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-gray-300 px-3.5 py-2.5 font-mono text-sm font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
      <div className="rainbow sticky bottom-0 h-6" />
    </>
  );
}
