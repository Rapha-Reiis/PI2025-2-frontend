import { GameContext } from '@contexts/Game.context';
import type { IGameByIDResponse, IGamesListResponse } from '@interfaces/game.interface';
import type { IDefaultProviderProp } from '@interfaces/providerProps.interface';
import { api } from '@services/api';
import handleAxiosErrors from '@utils/axiosErrorStandard';
import { useState } from 'react';

const GameProvider = ({ children }: IDefaultProviderProp) => {
  const [gameLoading, setGameLoading] = useState(false);
  const [popularGames, setPopularGames] = useState<IGamesListResponse>([]);

  const [gameSearchValue, setGameSearchValue] = useState('');
  const [searchGamesResult, setSearchGamesResult] = useState<IGamesListResponse>([]);
  const [gameByID, setGameByID] = useState<IGameByIDResponse>({} as IGameByIDResponse);

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

  const handleSearchGames = async (searchValues: string, page: number) => {
    if (page === 1) {
      setGameLoading(true);
    } else {
      setGameLoading(false);
    }

    try {
      const searchResponse = await api.get(`/games?search=${searchValues}&pageSize=${7}&page=${page}`);

      setSearchGamesResult((prev) => (page === 1 ? searchResponse.data : [...prev, ...searchResponse.data]));
    } catch (error) {
      handleAxiosErrors(error);
    } finally {
      setGameLoading(false);
    }
  };

  const getGamesByID = async (gameID: string) => {
    setGameLoading(true);
    try {
      const searchResponse = await api.get(`/games/${gameID}`);
      setGameByID(searchResponse.data);
    } catch (error) {
      handleAxiosErrors(error);
    } finally {
      setGameLoading(false);
    }
  };

  return (
    <GameContext.Provider
      value={{
        gameLoading,
        setGameLoading,
        getPopularGames,
        popularGames,
        handleSearchGames,
        gameSearchValue,
        setGameSearchValue,
        searchGamesResult,
        getGamesByID,
        gameByID,
        setGameByID
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
