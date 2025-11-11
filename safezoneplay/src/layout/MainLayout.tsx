import NavBar from '@components/NavBar/NavBar';
import StyledLayoutBody from './styles.mainLayout';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <StyledLayoutBody>
      <NavBar />
      <Outlet />
    </StyledLayoutBody>
  );
};

export default MainLayout;
