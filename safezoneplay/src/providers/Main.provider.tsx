import type { IDefaultProviderProp } from '@interfaces/providerProps.interface';
import AuthProvider from './Auth.provider';
import UserProvider from './User.provider';

const MainProvider = ({ children }: IDefaultProviderProp) => {
  return (
    <UserProvider>
      <AuthProvider>{children}</AuthProvider>
    </UserProvider>
  );
};

export default MainProvider;
