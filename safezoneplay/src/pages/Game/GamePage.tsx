import { Container } from '@styles/global';
import { StyledGamePageMain } from './styles.gamePage';
import { gameMockRespose } from './gameMock';

const GamePage = () => {
  return (
    <StyledGamePageMain
      style={{
        ['--bg-image' as string]: `url(${gameMockRespose.background_image})`
      }}
    >
      <Container></Container>
    </StyledGamePageMain>
  );
};

export default GamePage;
