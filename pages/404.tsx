import Wrapper from "../components/page";

export default function Error() {
  return (
    <>
      <Wrapper>
        <div className="grid min-h-full place-items-center px-6 py-24 font-mono sm:py-32 lg:px-8">
          <div>
            <pre>██╗ ██╗ ███████╗ ██╗   ██╗</pre>
            <pre>██║ ██║ ██╔═████╗██║   ██║</pre>
            <pre>███████║██║██╔██║███████║</pre>
            <pre>╚════██║████╔╝██║╚════██║</pre>
            <pre>     ██║╚██████╔╝     ██║</pre>
            <pre>     ╚═╝ ╚═════╝      ╚═╝</pre>
          </div>
          <br />
          <pre>404 | Page not found. </pre>
          <br />
        </div>
      </Wrapper>
    </>
  );
}
