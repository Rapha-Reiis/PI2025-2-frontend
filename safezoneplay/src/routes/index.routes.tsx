import { Routes, Route } from 'react-router-dom';
import StartPage from '../pages/Login/StartPage';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/start/:type' element={<StartPage />} />
    </Routes>
  );
};

export default RoutesMain;
