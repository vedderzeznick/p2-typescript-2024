import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadTracksByCountry } from "./tracks.js";
const tracks = await loadTracksByCountry('spain');
const html = render(tracks);
await writeFile('tracks.html', html);

