import { AuthContext } from '@contexts/Auth.context';
import type {
  IDefaultProviderProp,
  IErrorResponse
} from '@interfaces/providerProps.interface';
import type { IJWTToken, ILoginRequest } from '@interfaces/login.interface';
import { api } from '@services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import type { IGetUserDataResponse } from '@interfaces/users.interface';

const AuthProvider = ({ children }: IDefaultProviderProp) => {
  const navigate = useNavigate();
  const [userData, setUserdata] = useState<IGetUserDataResponse | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('@SafeZoneToken');

    if (token === null || token == undefined) {
      navigate('/start/login');
      toast('Você não está logado. Faça login novamente.');
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    // SE FOR USAR TELA DE LOADING, DESCOMENTAR...
    // if (!token) {
    //   setLoading(false);
    //   return;
    // }

    const decodedToken = jwtDecode(token) as IJWTToken;
    userLogged(decodedToken.id);
  }, []);

  const signIn = async (loginForm: ILoginRequest) => {
    try {
      const { data }: AxiosResponse = await api.post('/login', loginForm);
      localStorage.setItem('@SafeZoneToken', data.token);
      navigate('/home');
      toast.success('Seja bem vindo!');
    } catch (error) {
      const axiosError = error as AxiosError<IErrorResponse>;
      if (axiosError.response) {
        toast.error(axiosError.response.data.message);
        console.error('Erro da API:', axiosError.response.data);
      } else if (axiosError.request) {
        toast.error('Servidor não respondeu. Tente novamente.');
        console.error('Erro de rede:', axiosError.request);
      } else {
        toast.error('Erro inesperado.');
        console.error('Erro desconhecido:', axiosError.message);
      }
      console.log(error);
    }
  };

  const userLogged = async (id: string) => {
    try {
      const userDataRespose: IGetUserDataResponse = await api.get(
        `/users/${id}`
      );
      setUserdata(userDataRespose);
    } catch (error) {
      const axiosError = error as AxiosError<IErrorResponse>;
      if (axiosError.response) {
        toast.error(axiosError.response.data.message);
        console.error('Erro da API:', axiosError.response.data);
      } else if (axiosError.request) {
        toast.error('O Servidor não respondeu. Tente novamente.');
        console.error('Erro de rede:', axiosError.request);
      } else {
        toast.error('Erro inesperado.');
        console.error('Erro desconhecido:', axiosError.message);
      }
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, userData, setUserdata }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
