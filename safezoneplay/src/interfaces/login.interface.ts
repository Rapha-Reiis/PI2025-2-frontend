import type { loginSchema } from '@schemas/login.schema';
import type z from 'zod';

export type ILoginRequest = z.infer<typeof loginSchema>;

interface ILoginContextProps {
  signIn: (data: ILoginRequest) => Promise<void>;
}

export type { ILoginContextProps };
