import MainLayout from '@layout/MainLayout';
import { VerifyEmailPage } from '@pages/EmailPage/EmailConfirmationPage';
import GamePage from '@pages/Game/GamePage';
import HomePage from '@pages/Home/HomePage';
import StartPage from '@pages/Login/StartPage';
import Perfil from '@pages/Perfil/Perfil';
import PremiumPaymentPage from '@pages/PremiumPayment/PremiumPaymentPage';
import SearchResultPage from '@pages/SearchResult/SearchResultPage';
import { Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/game/:id' element={<GamePage />} />
        <Route path='/search/:value' element={<SearchResultPage />} />
        <Route path='/premium' element={<PremiumPaymentPage />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/verify-email' element={<VerifyEmailPage />} />
      </Route>
      <Route path='/start/:type' element={<StartPage />} />
    </Routes>
  );
};

export default MainRoutes;
