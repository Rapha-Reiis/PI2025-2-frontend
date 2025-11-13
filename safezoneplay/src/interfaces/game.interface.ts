export interface Game {
  idGame: number;
  name: string;
  slug: string;
  metacritic: number;
  released: string;
  background_image: string;
  platforms: Platform[];
  genres: Genre[];
}

export interface Platform {
  id: number;
  name: string;
  image_background: string;
  requirements: PlatformRequirements;
}

export interface PlatformRequirements {
  minimum: string | null;
  recommended: string | null;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export type IGameCardValues = Pick<
  Game,
  'idGame' | 'background_image' | 'name' | 'released' | 'platforms'
>;

export type IGamesListResponse = Game[];

export interface IGameContextProps {
  gameLoading: boolean;
  setGameLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getPopularGames: () => Promise<void>;
  popularGames: IGamesListResponse;
}
