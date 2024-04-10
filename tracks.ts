export class Track {
  constructor(
    public gender: "male" | "female",
    public name: {
      title: "Mr" | "Mrs";
      first: string;
      last: string;
    },
    public location: {
      street: string;
      city: string;
      state: string;
      country: string;
      postcode: number;
    },
    public login: {
      username: string;
      password: string;
    },
    public email: string,
    public picture: {
      large: string;
      medium: string;
      thumbnail: string;
    }
  ) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}
const apiKey = "vVwSXklewGBCzvTPjbAY";
const apiSecret = "eoempEAEUWILMEbjXIWYblMKCESomVJU";

export const loadTracksByCountry = async () => {
  const response = await fetch(
    `https://api.discogs.com/database/search?genre=rock&type=release&key=${apiKey}&secret=${apiSecret}&page=1&per_page=50`
  );
  const { pagination, results } = (await response.json());
  const objectTracks: Array<Track> = [];
  for (const { title, year, style, country, format, label, cover_image } of results) {
    console.log(title, cover_image);
  }
  return [];
};
