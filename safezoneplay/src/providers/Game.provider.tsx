import { GameContext } from '@contexts/Game.context';
import type { IGamesListResponse } from '@interfaces/game.interface';
import type { IDefaultProviderProp } from '@interfaces/providerProps.interface';
import { api } from '@services/api';
import handleAxiosErrors from '@utils/axiosErrorStandard';
import { useState } from 'react';

const GameProvider = ({ children }: IDefaultProviderProp) => {
  const [gameLoading, setGameLoading] = useState(false);
  const [popularGames, setPopularGames] = useState<IGamesListResponse>([]);

  const getPopularGames = async () => {
    setGameLoading(true);
    try {
      const popularGamesResponse = await api.get('/games');
      setPopularGames(popularGamesResponse.data);
    } catch (error) {
      handleAxiosErrors(error);
    } finally {
      setGameLoading(false);
    }
  };

  return (
    <GameContext.Provider
      value={{ gameLoading, setGameLoading, getPopularGames, popularGames }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
