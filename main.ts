import { writeFile } from "fs/promises";
import { render, detailedInfo } from "./render.js";
import { loadAlbums } from "./albums.js";
const albums = await loadAlbums();
const html = render(albums);
await writeFile('index.html', html);
for (const album of albums) {
    const detailedHtml = detailedInfo(album);
    await writeFile(`${album.id}.html`, detailedHtml);
}