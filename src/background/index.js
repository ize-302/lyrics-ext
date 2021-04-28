// If your extension doesn't need a background script, just leave this file empty
import { getSong } from "genius-lyrics-api";

// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export async function fetchSong(query) {
  const response = await getSong({
    apiKey: process.env.REACT_APP_ACCESS_TOKEN, // get access token from genius.com
    title: query,
    artist: query,
    optimizeQuery: true,
  });
  return response;
}
