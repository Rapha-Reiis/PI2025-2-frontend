import MainLayout from '@layout/MainLayout';
import GamePage from '@pages/Game/GamePage';
import HomePage from '@pages/Home/HomePage';
import StartPage from '@pages/Login/StartPage';
import SearchResultPage from '@pages/SearchResult/SearchResultPage';
import { Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/game/:id' element={<GamePage />} />
        <Route path='/search/:value' element={<SearchResultPage />} />
      </Route>
      <Route path='/start/:type' element={<StartPage />} />
    </Routes>
  );
};

export default MainRoutes;
