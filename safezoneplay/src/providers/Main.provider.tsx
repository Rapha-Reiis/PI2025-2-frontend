import type { IDefaultProviderProp } from '@interfaces/providerProps.interface';
import AuthProvider from './Auth.provider';
import UserProvider from './User.provider';
import GameProvider from './Game.provider';

const MainProvider = ({ children }: IDefaultProviderProp) => {
  return (
    <UserProvider>
      <GameProvider>
        <AuthProvider>{children}</AuthProvider>
      </GameProvider>
    </UserProvider>
  );
};

export default MainProvider;
