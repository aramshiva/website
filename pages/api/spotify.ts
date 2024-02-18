import fetch from "node-fetch";
const {
   SPOTIFY_CLIENT_ID: client_id,
   SPOTIFY_CLIENT_SECRET: client_secret,
   SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
   const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
         Authorization: `Basic ${basic}`,
         "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
         grant_type: "refresh_token",
         refresh_token,
      } as Record<string, string>),
   });

   return response.json();
};

export const getNowPlaying = async () => {
   const { access_token } = await getAccessToken();

   return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
         Authorization: `Bearer ${access_token}`,
      },
   });
};

const spotifyHandler = async (_: any, res: any) => {
   try {
      const response = await getNowPlaying();

      if (response.status === 204 || response.status > 400) {
         return res.status(200).json({ isPlaying: false });
      }

      const song = await response.json();
      const { is_playing: isPlaying, item } = song;
      const { name: title, artists, album, external_urls } = item;
      const artist = artists.map((_artist: any) => _artist.name).join(", ");
      const albumImageUrl = album.images[0].url;
      const songUrl = external_urls.spotify;

      return res.status(200).json({
         album,
         albumImageUrl,
         artist,
         isPlaying,
         songUrl,
         title,
      });
   } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
   }
};

export default spotifyHandler;
