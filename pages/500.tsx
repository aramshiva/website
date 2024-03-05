import Wrapper from "../components/wrapper";

export default function Error() {
  return (
    <>
      <Wrapper>
        <div className="grid min-h-full place-items-center px-6 py-24 font-mono sm:py-32 lg:px-8">
          <div>
            <pre>{`8888888888      ,a8888a,        ,a8888a,`}</pre>
            <pre>{`88            ,8P"'  '"Y8,    ,8P"'  '"Y8,`}</pre>
            <pre>{`88  ____     ,8P        Y8,  ,8P        Y8,`}</pre>
            <pre>{`88a8PPPP8b,  88          88  88          88`}</pre>
            <pre>{`PP"     '8b  88          88  88          88`}</pre>
            <pre>{`         d8  '8b        d8'  '8b        d8'`}</pre>
            <pre>{`Y8a     a8P   '8ba,  ,ad8'    '8ba,  ,ad8'`}</pre>
            <pre>{` "Y88888P"      "Y8888P"        "Y8888P"`}</pre>
          </div>
          <br />
          <pre>{`500 | Internal Server Error `}</pre>
          <p></p>
          <br />
        </div>
      </Wrapper>
    </>
  );
}
