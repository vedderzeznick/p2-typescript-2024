import { writeFile, mkdir } from "fs/promises";
import { render, detailedInfo } from "./render.js";
import { loadAlbums } from "./albums.js";
const albums = await loadAlbums();
const html = render(albums);
await writeFile('index.html', html);
await mkdir('./albums', { recursive: true });
for (const album of albums) {
    const detailedHtml = detailedInfo(album);
    await writeFile(`./albums/${album.id}.html`, detailedHtml);
}