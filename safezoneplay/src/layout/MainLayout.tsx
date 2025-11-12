import NavBar from '@components/NavBar/NavBar';
import StyledLayoutBody from './styles.mainLayout';
import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer/Footer';

const MainLayout = () => {
  return (
    <StyledLayoutBody>
      <NavBar />
      <Outlet />
      <Footer />
    </StyledLayoutBody>
  );
};

export default MainLayout;
