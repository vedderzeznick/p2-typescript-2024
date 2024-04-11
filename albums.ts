export class Album {
  constructor(
    public title: string,
    public year: string,
    public format: string[],
    public style: string[],
    public cover_image: string,
    public country: string,
    public artist: string,
    public name: string,
    public label: string[],
    public id: number
  ) {}
}
const apiKey = "vVwSXklewGBCzvTPjbAY";
const apiSecret = "eoempEAEUWILMEbjXIWYblMKCESomVJU";

export const loadAlbums = async () => {
  const response = await fetch(
    `https://api.discogs.com/database/search?genre=rock&type=release&key=${apiKey}&secret=${apiSecret}&page=1&per_page=50`
  );
  const { pagination, results } = (await response.json());
  const albums: Array<Album> = [];
  for (const { title, year, style, country, format, label, cover_image, id } of results) {
    const splitted = title.split(" - ");
    const album = new Album(title, year, format, style, cover_image, country, splitted[0], splitted[1], label, id);
    albums.push(album);
  }
  return albums;
};
