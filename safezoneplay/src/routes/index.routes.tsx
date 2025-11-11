import MainLayout from '@layout/MainLayout';
import HomePage from '@pages/Home/HomePage';
import StartPage from '@pages/Login/StartPage';
import { Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/game/:id' element />
      </Route>
      <Route path='/' />
      <Route path='/start/:type' element={<StartPage />} />
    </Routes>
  );
};

export default MainRoutes;
