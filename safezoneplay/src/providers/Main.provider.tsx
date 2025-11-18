import type { IDefaultProviderProp } from '@interfaces/providerProps.interface';
import AuthProvider from './Auth.provider';
import UserProvider from './User.provider';
import GameProvider from './Game.provider';

const MainProvider = ({ children }: IDefaultProviderProp) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GameProvider>{children}</GameProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default MainProvider;
