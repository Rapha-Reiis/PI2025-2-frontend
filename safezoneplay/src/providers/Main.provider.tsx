import type { IDefaultProviderProp } from '@interfaces/providerProps.interface';
import AuthProvider from './Auth.provider';

const MainProvider = ({ children }: IDefaultProviderProp) => {
  return <AuthProvider>{children};</AuthProvider>;
};

export default MainProvider;
