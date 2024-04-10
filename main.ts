import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadAlbums } from "./albums.js";
const albums = await loadAlbums();
const html = render(albums);
await writeFile('tracks.html', html);

