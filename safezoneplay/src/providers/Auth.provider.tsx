import { AuthContext } from '@contexts/Auth.context';
import type { IDefaultProviderProp } from '@interfaces/providerProps.interface';
import type { ILoginRequest } from '@interfaces/login.interface';
import { api } from '@services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { AxiosError } from 'axios';

interface IErrorResponse {
  message: string;
}

const AuthProvider = ({ children }: IDefaultProviderProp) => {
  const navigate = useNavigate();

  const signIn = async (data: ILoginRequest) => {
    try {
      const response = await api.post('/login', data);
      const token: string = response.data.token;
      localStorage.setItem('@SafeZoneToken', token);
      navigate('/dashboard');
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

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
