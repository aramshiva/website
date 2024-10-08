/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
let REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  if (!REFRESH_TOKEN) {
    throw new Error("No refresh token available");
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const data = await response.json();

  if (data.refresh_token) {
    REFRESH_TOKEN = data.refresh_token;
    console.log("New refresh token received");
  }

  return data;
}

async function getNowPlaying(accessToken: string) {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204) {
    return null;
  }

  if (response.status > 400) {
    console.error(
      "Error fetching now playing:",
      response.status,
      await response.text()
    );
    return null;
  }

  return response.json();
}

async function getRecentlyPlayed(accessToken: string) {
  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  return response.json();
}

function formatTrackData(
  track: any,
  isPlaying: boolean,
  playedAt?: string,
  progressMs?: number
) {
  return {
    isPlaying,
    title: track.name,
    artist: track.artists.map((artist: any) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
    })),
    album: {
      name: track.album.name,
      url: track.album.external_urls.spotify,
      releaseDate: track.album.release_date,
      releaseDatePrecision: track.album.release_date_precision,
      totalTracks: track.album.total_tracks,
      images: track.album.images,
    },
    durationMs: track.duration_ms,
    durationSeconds: Math.floor(track.duration_ms / 1000),
    progressMs,
    progressSeconds: progressMs ? Math.floor(progressMs / 1000) : undefined,
    explicit: track.explicit,
    popularity: track.popularity,
    previewUrl: track.preview_url,
    trackNumber: track.track_number,
    songUrl: track.external_urls.spotify,
    playedAt,
  };
}

export async function GET(request: Request) {
  try {
    if (!REFRESH_TOKEN) {
      return NextResponse.redirect(new URL("/api/spotify/auth", request.url));
    }

    const { access_token } = await getAccessToken();

    const nowPlaying = await getNowPlaying(access_token);
    // console.log('Now playing response:', nowPlaying);

    if (nowPlaying && nowPlaying.item) {
      const track = formatTrackData(
        nowPlaying.item,
        nowPlaying.is_playing,
        undefined,
        nowPlaying.progress_ms
      );
      const response = NextResponse.json({
        ...track,
        device: nowPlaying.device?.name || "Unknown device",
      });

      // Add cache control headers
      response.headers.set("Cache-Control", "no-store, max-age=0");

      return response;
    } else {
      const recentlyPlayed = await getRecentlyPlayed(access_token);

      if (
        recentlyPlayed &&
        recentlyPlayed.items &&
        recentlyPlayed.items.length > 0
      ) {
        const lastPlayed = recentlyPlayed.items[0].track;
        const track = formatTrackData(
          lastPlayed,
          false,
          recentlyPlayed.items[0].played_at
        );
        const response = NextResponse.json(track);

        return response;
      }
    }

    const response = NextResponse.json({
      isPlaying: false,
      error: "No track data available",
    });

    // Add more strict cache control headers
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("Error in Spotify API route:", error);
    const errorResponse = NextResponse.json(
      { isPlaying: false, error: "An error occurred" },
      { status: 500 }
    );

    // Add the same cache control headers to error response
    errorResponse.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    errorResponse.headers.set("Pragma", "no-cache");
    errorResponse.headers.set("Expires", "0");

    return errorResponse;
  }
}
