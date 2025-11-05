import { UserContext } from '@contexts/User.context';
import type {
  IDefaultProviderProp,
  IErrorResponse
} from '@interfaces/providerProps.interface';
import type { ICreateUser } from '@interfaces/users.interface';
import { api } from '@services/api';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserProvider = ({ children }: IDefaultProviderProp) => {
  const navigate = useNavigate();

  const createUser = async (data: ICreateUser) => {
    try {
      await api.post('/users', data);
      navigate('/start/login');
      toast.success('Usuário Criado. Você já pode se logar');
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
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
