import Button from '@components/Buttons/Buttons';
import Input from '@components/FormInput/input.component';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DataProps>({
    resolver: zodResolver(LoginSchema)
  });

  const formSubmit = async (data: DataProps) => {
    const response = await LoginRequest(data);
    if (response) {
      setTimeout(() => {
        navigate('/dashboard/veiculos');
      }, 2000);
    }
  };

  return (
    <form action=''>
      <Input label='Email' placeholder='user@mailexample.com' />
      <Input label='Senha' placeholder='Sua senha' />
      <Button type={'loginButton'}>Log in</Button>
    </form>
  );
};

export default LoginForm;
