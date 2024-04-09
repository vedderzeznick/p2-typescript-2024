
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
const apikeyLastfm = '5277065d92545fb29b8bb4fe64aa0f88';

export const loadTracksByCountry = async (country: string) => {
  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${apikeyLastfm}&format=json`);
  const { tracks } = (await response.json()) as { tracks: any[] };
  const objectTracks: Array<Track> = [];
  for (const { gender, name, location, login, email, picture } of tracks) {
    objectTracks.push(new Track(gender, name, location, login, email, picture));
  }
  return objectTracks;
};