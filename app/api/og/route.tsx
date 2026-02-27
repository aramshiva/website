import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const title = searchParams.get("title");

  if (!url) {
    return new Response("Missing ?url= parameter", { status: 400 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src={url}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {title && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              alignItems: "flex-end",
              padding: "40px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: 56,
                fontWeight: 600,
              }}
            >
              {title}
            </p>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
