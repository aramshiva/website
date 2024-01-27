import Link from "next/link";
export default function Error() {
  return (
    <>
      <div className="grid h-screen min-h-full w-screen place-items-center bg-black px-6 py-24 font-mono text-white sm:py-32 lg:px-8">
        <div>
          <pre>██╗ ██╗ ███████╗██╗ ██╗</pre>
          <pre>██║ ██║██╔═████╗██║ ██║</pre>
          <pre>███████║██║██╔██║███████║</pre>
          <pre>╚════██║████╔╝██║╚════██║</pre>
          <pre> ██║╚██████╔╝ ██║</pre>
          <pre> ╚═╝ ╚═════╝ ╚═╝</pre>
        </div>
        <br />
        <pre>404 | Page not found. </pre>
        <br />
      </div>
    </>
  );
}
