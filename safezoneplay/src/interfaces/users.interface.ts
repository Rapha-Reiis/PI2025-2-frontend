import type createUserSchema from '@schemas/user.schema';
import z from 'zod';

interface IUser {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  profile_image_url?: string | undefined;
  bio?: string | undefined;
  premium: boolean;
  created_at: Date;
}

type ICreateUser = z.infer<typeof createUserSchema>;

interface ICreateUserResponse {
  id: string;
  name: string;
  email: string;
  username: string;
  profile_image_url: string | undefined;
  bio: string | undefined;
  premium: boolean;
  role: 'USER' | 'ADMIN';
}

interface IUserContextProps {
  createUser: (data: ICreateUser) => Promise<void>;
}

export type { IUser, ICreateUser, ICreateUserResponse, IUserContextProps };
