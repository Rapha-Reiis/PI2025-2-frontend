/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IGameByIDResponse, IGameContextProps } from '@interfaces/game.interface';
import { createContext, type SetStateAction } from 'react';

export const GameContext = createContext<IGameContextProps>({
  getPopularGames: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },

  popularGames: [],

  gameLoading: false,

  setGameLoading: function (_value: SetStateAction<boolean>): void {
    throw new Error('Function not implemented.');
  },

  gameByID: {} as IGameByIDResponse,

  handleSearchGames: function (_searchValues: string, _page: number): Promise<void> {
    throw new Error('Function not implemented.');
  },

  gameSearchValue: '',

  searchGamesResult: [],

  getGamesByID: function (_gameID: string): Promise<void> {
    throw new Error('Function not implemented.');
  },

  setGameSearchValue: function (_value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },

  setGameByID: function (_value: SetStateAction<IGameByIDResponse>): void {
    throw new Error('Function not implemented.');
  }
});
