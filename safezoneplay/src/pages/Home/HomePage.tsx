import { Container } from '@styles/global';
import { GameCardList } from '@components/GameCard/GameCard.component';
import { mockDB } from '@services/mock';
import { StyledMain } from './styles.homePage';

const HomePage = () => {
  return (
    <StyledMain>
      <Container>
        <section id='cardlist-myGames'>
          <h2>Meus Jogos</h2>
          <GameCardList gameList={mockDB.results} />
        </section>

        <section id='cardList-popularGames'>
          <h2>Jogos Populares</h2>
          <GameCardList gameList={mockDB.results} />
        </section>
      </Container>
    </StyledMain>
  );
};

export default HomePage;
