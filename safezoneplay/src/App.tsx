import MainProvider from '@providers/Main.provider';
import MainRoutes from '@routes/index.routes';
import { globalStyles } from '@styles/global';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    globalStyles(),
    (
      <>
        <MainProvider>
          <MainRoutes />
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
          />
        </MainProvider>
      </>
    )
  );
};

export default App;
