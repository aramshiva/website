import { ImageResponse } from "next/og";

function getSafeImageUrl(input: string): string | null {
  try {
    const parsed = new URL(input);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawUrl = searchParams.get("url");
  const title = searchParams.get("title");

  if (!rawUrl) {
    return new Response("Missing ?url= parameter", { status: 400 });
  }

  const safeUrl = getSafeImageUrl(rawUrl);
  if (!safeUrl) {
    return new Response("Invalid ?url= parameter", { status: 400 });
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
          src={safeUrl}
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
