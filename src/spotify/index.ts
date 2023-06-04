import { ISpotify } from "./ISpotify.js";
import Win32Spotify from "./Win32Spotify.js"

let spotify: ISpotify | undefined;
if (process.platform == 'win32') {
  spotify = new Win32Spotify();
}
export default spotify;