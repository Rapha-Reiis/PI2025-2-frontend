/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  ILoginContextProps,
  ILoginRequest
} from '@interfaces/login.interface';
import { createContext } from 'react';

export const AuthContext = createContext<ILoginContextProps>({
  signIn: function (_data: ILoginRequest): Promise<void> {
    throw new Error('Function not implemented.');
  }
});
