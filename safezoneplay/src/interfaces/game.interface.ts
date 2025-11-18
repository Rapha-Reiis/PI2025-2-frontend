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

export type IGameCardValues = Pick<Game, 'idGame' | 'background_image' | 'name' | 'released' | 'platforms'>;

export type IGamesListResponse = Game[];

export interface IGameByIDResponse {
  idGame: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description2: string;
  metacritic: number;
  released: string;
  background_image: string;
  background_image_additional: string;
  playtime: number;
  reddit_url: string;
  website: string;
  metacritic_url: string;

  paltforms: {
    id: number;
    name: string;
    image_background: string;
    released_at: string;
    requirements: {
      minimum?: string;
      recommended?: string;
      [key: string]: unknown;
    };
  }[];

  genres: {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  }[];

  publishers: {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  }[];

  developers: {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  }[];

  screen_shots: {
    id: number;
    image: string;
    height: number;
    width: number;
  }[];

  trailers: {
    id?: number;
    name?: string;
    preview?: string;
    data?: {
      480?: string;
      max?: string;
    };
  }[];
}

export interface IUserGamesResponse {
  data: {
    id: string;
    userId: string;
    gameId: number;
    status: 'BACKLOG' | 'PLAYING' | 'COMPLETED' | 'DROPPED'; // ajuste se necessário
    note: string | null;
    created_at: string;
    updated_at: string;
    game: {
      idGame: number;
      name: string;
      slug: string;
      description: string;
      metacritic: number;
      released: string;
      background_image: string;
      website: string;
      platforms: {
        id: number;
        name: string;
      }[];
      genres: {
        id: number;
        name: string;
      }[][];
    };
  }[];
  totalGames: number;
  totalPage: number;
  currentPage: number;
}

export interface IGameContextProps {
  gameLoading: boolean;
  setGameLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getPopularGames: () => Promise<void>;
  popularGames: IGamesListResponse;
  handleSearchGames: (searchValues: string, page: number) => Promise<void>;
  gameSearchValue: string;
  setGameSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchGamesResult: IGamesListResponse;
  getGamesByID: (gameID: string) => Promise<void>;
  gameByID: IGameByIDResponse;
  setGameByID: React.Dispatch<React.SetStateAction<IGameByIDResponse>>;
  getUserGames: (userID: string) => Promise<void>;
}
