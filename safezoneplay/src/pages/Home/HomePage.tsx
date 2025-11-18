import { Container } from '@styles/global';
import { GameCardList } from '@components/GameCard/GameCard.component';
import { StyledMain } from './styles.homePage';
import { useEffect } from 'react';
import useGames from '@hooks/useGames';
import { Loading } from '@components/Loading/Loading.component';

const HomePage = () => {
  const { popularGames, gameLoading, getPopularGames } = useGames();
  console.log(popularGames);

  useEffect(() => {
    getPopularGames();
  }, []);

  return (
    <StyledMain>
      <Container>
        <section id='cardlist-myGames'>
          <h2>Jogos Populares</h2>
          {gameLoading ? <Loading /> : <GameCardList gameList={popularGames} direction='line' />}
        </section>

        {/* <section id='cardList-popularGames'>
          <h2>Jogos Populares</h2>
          <GameCardList gameList={popularGames} />
        </section> */}
      </Container>
    </StyledMain>
  );
};

export default HomePage;
