/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IGameContextProps } from '@interfaces/game.interface';
import { createContext, type SetStateAction } from 'react';

export const GameContext = createContext<IGameContextProps>({
  getPopularGames: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
  popularGames: [],
  gameLoading: false,
  setGameLoading: function (_value: SetStateAction<boolean>): void {
    throw new Error('Function not implemented.');
  }
});
