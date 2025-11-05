import type { loginSchema } from '@schemas/login.schema';
import type z from 'zod';

type ILoginRequest = z.infer<typeof loginSchema>;
interface ILoginResponse {
  id: string;
  name: string;
  email: string;
  username: string;
  premium: boolean;
  token: string;
}
interface ILoginContextProps {
  signIn: (data: ILoginRequest) => Promise<void>;
}

export type { ILoginRequest, ILoginResponse, ILoginContextProps };
