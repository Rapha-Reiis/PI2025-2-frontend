/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IGameContextProps } from '@interfaces/game.interface';
import { createContext } from 'react';

export const AuthContext = createContext<IGameContextProps>({});
