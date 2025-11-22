/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@styles/global';
import { GameCardList } from '@components/GameCard/GameCard.component';
import { StyledMain } from './styles.homePage';
import { useEffect, useState } from 'react';
import useGames from '@hooks/useGames';
import { Loading } from '@components/Loading/Loading.component';
import useAuth from '@hooks/useAuth';
import Button from '@components/Buttons/Buttons';

const HomePage = () => {
  const { userData, userLoading } = useAuth();
  const { popularGames, gameLoading, getPopularGames, getUserGames, userGames } = useGames();

  const [page, setPage] = useState(1);

  useEffect(() => {
    getPopularGames();
  }, []);

  useEffect(() => {
    if (userLoading) return;
    if (!userData?.id) return;

    getUserGames(userData.id, page, 10);
    console.log(userGames);
  }, [userLoading, userData]);

  return (
    <StyledMain>
      <Container>
        <section id='cardList-popularGames'>
          <h2>Jogos Populares</h2>
          {gameLoading ? <Loading /> : <GameCardList gameList={popularGames} direction='line' />}
        </section>

        <section id='cardlist-myGames'>
          <h2>Meu Jogos ({userGames.length})</h2>
          {gameLoading || userLoading ? <Loading /> : <GameCardList gameList={userGames} direction='grid' />}
          <Button onClick={() => setPage(page + 1)} type={'moreResultsButton'}>
            MAIS
          </Button>
        </section>
      </Container>
    </StyledMain>
  );
};

export default HomePage;
