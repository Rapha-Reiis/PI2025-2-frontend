import DashboardPage from '@pages/Dashboard/DashboardPage';
import StartPage from '@pages/Login/StartPage';
import { Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/start/:type' element={<StartPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
    </Routes>
  );
};

export default MainRoutes;
