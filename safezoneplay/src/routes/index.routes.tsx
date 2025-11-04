import { Routes, Route } from 'react-router-dom';
import StartPage from '../pages/Login/StartPage';
import DashboardPage from '../pages/Dashboard/DashboardPage';

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
