export default function Example() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="font-mono rounded-lg sticky w-fit text-black">
          <p>██╗&nbsp;&nbsp;██╗&nbsp;██████╗&nbsp;██╗&nbsp;&nbsp;██╗</p>
          <p>██║&nbsp;&nbsp;██║██╔═████╗██║&nbsp;&nbsp;██║</p>
          <p>███████║██║██╔██║███████║</p>
          <p>╚════██║████╔╝██║╚════██║</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║╚██████╔╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝&nbsp;╚═════╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝</p>
        </div>
        <div className="text-center">
          <p className="mt-6 text-base leading-7 text-gray-600 font-mono">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-mono"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
