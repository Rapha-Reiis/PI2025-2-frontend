import { GameCardList } from '@components/GameCard/GameCard.component';
import useGames from '@hooks/useGames';
import { StyledMain } from '@pages/Home/styles.homePage';
import { Container } from '@styles/global';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResultPage = () => {
  const param = useParams();

  const { gameSearchValue, handleSearchGames, gameLoading, searchGamesResult } = useGames();

  console.log(gameSearchValue);
  useEffect(() => {
    if (param.value) {
      handleSearchGames(param.value);
    }
  }, [param.value]);

  console.log(gameSearchValue);

  return (
    <StyledMain>
      <Container>
        {gameLoading ? (
          <p>Carregando</p>
        ) : (
          <section id='cardlist-myGames'>
            <h2>Resultado da Pesquisa:</h2>
            <Container>
              <GameCardList gameList={searchGamesResult} direction='grid' />
            </Container>
          </section>
        )}

        {/* <section id='cardList-popularGames'>
          <h2>Jogos Populares</h2>
          <GameCardList gameList={popularGames} />
        </section> */}
      </Container>
    </StyledMain>
  );
};

export default SearchResultPage;
