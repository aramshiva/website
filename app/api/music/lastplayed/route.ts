import { NextResponse } from "next/server";

const { LASTFM_API_KEY: api_key, LASTFM_USERNAME: username } = process.env;

const NOW_PLAYING_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${api_key}&format=json`;
if (!api_key || !username) {
  throw new Error(
    "LASTFM_API_KEY and LASTFM_USERNAME must be defined in environment variables",
  );
}

interface Track {
  "@attr"?: { nowplaying: string };
  name: string;
  artist: { "#text": string };
  album: { "#text": string };
  image: { "#text": string }[];
  url: string;
  date?: { uts: string; "#text": string };
}

interface NowPlayingResponse {
  recenttracks: {
    track: Track[];
  };
}

const getNowPlaying = async (): Promise<NowPlayingResponse> => {
  const response = await fetch(NOW_PLAYING_ENDPOINT);
  if (!response.ok) {
    throw new Error(`Failed to fetch now playing data: ${response.statusText}`);
  }
  const data = await response.json();
  if (!data.recenttracks || !data.recenttracks.track) {
    throw new Error("Invalid response structure");
  }
  return data as NowPlayingResponse;
};

const getHandler = async () => {
  try {
    const data = await getNowPlaying();
    const track = data.recenttracks.track.find((t) => !t["@attr"]?.nowplaying);
    if (!track) {
      return NextResponse.json(
        { error: "No last played track found" },
        { status: 404 },
      );
    }
    const { name: title, artist, album, url: songUrl, image, date } = track;
    const artistName = artist["#text"];
    const albumName = album["#text"];
    const albumImageUrl = image[image.length - 1]["#text"];
    const playedAt = date ? date["#text"] : null;
    const timestamp = date ? parseInt(date.uts) * 1000 : null;

    return NextResponse.json({
      album: albumName,
      albumImageUrl,
      artistName,
      songUrl,
      title,
      playedAt,
      timestamp,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const GET = getHandler;
