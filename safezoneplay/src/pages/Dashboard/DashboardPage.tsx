import NavBar from '@components/NavBar/NavBar';
import { Container } from '@styles/global';
import { StyledBody, StyledMain } from './styles.dashboard';

const DashboardPage = () => {
  return (
    <StyledBody>
      <NavBar />
      <StyledMain>
        <Container></Container>
      </StyledMain>
    </StyledBody>
  );
};

export default DashboardPage;
