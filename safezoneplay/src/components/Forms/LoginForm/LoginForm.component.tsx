import Button from '../../Buttons/Buttons';
import Input from '../../FormInput/input.component';

const LoginForm = () => {
  return (
    <form action=''>
      <Input label='Email' placeholder='user@mailexample.com' />
      <Input label='Senha' placeholder='Sua senha' />
      <Button type={'loginButton'}>Log in</Button>
    </form>
  );
};

export default LoginForm;
