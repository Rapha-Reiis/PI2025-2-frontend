import MainRoutes from '@routes/index.routes';
import { globalStyles } from '@styles/global';

const App = () => {
  return (globalStyles(), (<MainRoutes />));
};

export default App;
