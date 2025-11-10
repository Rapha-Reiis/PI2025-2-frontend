export interface Genre {
  id: number;
  name: string;
}

export interface PlatformInfo {
  id: number;
  name: string;
}

export interface PlatformWrapper {
  platform: PlatformInfo;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top?: number;
  ratings_count?: number;
  reviews_text_count?: number;
  added?: number;
  metacritic?: number;
  playtime?: number;
  genres: Genre[];
  platforms?: PlatformWrapper[];
}

export interface GameApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}
