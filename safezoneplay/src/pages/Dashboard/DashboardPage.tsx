import NavBar from '@components/NavBar/NavBar';
import { Container } from '@styles/global';
import { StyledBody, StyledMain } from './styles.dashboard';
import { GameCardList } from '@components/GameCard/GameCard.component';
import { mockDB } from '@services/mock';
import { useEffect } from 'react';

const DashboardPage = () => {
  useEffect(() => {});
  return (
    <StyledBody>
      <NavBar />
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
    </StyledBody>
  );
};

export default DashboardPage;
