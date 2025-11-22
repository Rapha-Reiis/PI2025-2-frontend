import { GameContext } from '@contexts/Game.context';
import type {
  IGameByIDResponse,
  IGamesListResponse,
  IUserGamesResponse,
  TGameStatus
} from '@interfaces/game.interface';
import type { IDefaultProviderProp } from '@interfaces/providerProps.interface';
import { api } from '@services/api';
import handleAxiosErrors from '@utils/axiosErrorStandard';
import type { AxiosResponse } from 'axios';
import { useState } from 'react';

const GameProvider = ({ children }: IDefaultProviderProp) => {
  const [gameLoading, setGameLoading] = useState(false);
  const [popularGames, setPopularGames] = useState<IGamesListResponse>([]);
  const [userGames, setUserGames] = useState<IGamesListResponse>([]);

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

  const getGamesByID = async (gameID: number, userID: string) => {
    setGameLoading(true);
    try {
      const searchResponse = await api.get(`/games/id?gameId=${gameID}&userId=${userID}`);
      setGameByID(searchResponse.data);
      console.log(searchResponse);
    } catch (error) {
      handleAxiosErrors(error);
    } finally {
      setGameLoading(false);
    }
  };

  const getUserGames = async (userID: string, page: number, limitPerPage: number) => {
    setGameLoading(true);
    try {
      const userGameResponse: AxiosResponse<IUserGamesResponse> = await api.get(
        `/profile/?userId=${userID}&page=${page}&limit=${limitPerPage}`
      );
      const onlyGamesField = userGameResponse.data.data.map((result) => result.game);
      setUserGames(onlyGamesField);
      console.log(userGameResponse);
    } catch (error) {
      handleAxiosErrors(error);
    } finally {
      setGameLoading(false);
    }
  };

  const createGameStatus = async (status: string, userId: string, gameId: number) => {
    const data = {
      userId,
      status,
      gameId
    };

    try {
      const gameStatusRespose = await api.post(`/profile`, data);
      console.log(gameStatusRespose);
    } catch (error) {
      handleAxiosErrors(error);
    }
  };

  const updateGameStatus = async (status: string, userGameID: string) => {
    console.log(status);
    try {
      const gameStatusRespose = await api.put(`/profile/update/${userGameID}`, { status: status });
      console.log(gameStatusRespose);
    } catch (error) {
      handleAxiosErrors(error);
    }
  };

  const deleteGameStatus = async (userGameID: string) => {
    try {
      const gameStatusRespose = await api.delete(`/profile/delete/${userGameID}`);
      console.log(gameStatusRespose);
    } catch (error) {
      handleAxiosErrors(error);
    }
  };

  const handleGameStatus = async (
    actualStatus: TGameStatus,
    sentStatus: 'BACKLOG' | 'PLAYING' | 'FINISHED' | 'DROPPED',
    userId: string,
    userGameID: string | null,
    gameId: number
  ) => {
    if (actualStatus === null) {
      await createGameStatus(sentStatus, userId, gameId);
    } else if (actualStatus !== sentStatus) {
      await updateGameStatus(sentStatus, userGameID!);
    } else if (actualStatus === sentStatus) {
      await deleteGameStatus(userGameID!);
    }
    await getGamesByID(gameId, userId);
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
        setGameByID,
        getUserGames,
        createGameStatus,
        updateGameStatus,
        deleteGameStatus,
        handleGameStatus,
        userGames,
        setUserGames
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
