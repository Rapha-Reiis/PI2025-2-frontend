import StyledLoginPageContainer from './styles';
import logo from '../../assets/sfp_logo.svg';
import Input from '../../components/Input/input.component';
import Button from '../../styles/Buttons';
import { Container } from '../../styles/Global';

const LoginPage = () => {
  return (
    <StyledLoginPageContainer>
      <Container>
        <section className='container-login-elements'>
          <div className='logo-container'>
            <img src={logo} alt='logo' />
          </div>

          <form action=''>
            <Input label='Email' placeholder='user@mailexample.com' />
            <Input label='Senha' placeholder='Sua senha' />
            <Button type={'loginButton'}>Log in</Button>
          </form>
        </section>
        <section className='container-newUser'>
          <p>Não é usuário ainda? <a href="/register">Cadastre-se aqui</a></p>
        </section>
      </Container>
    </StyledLoginPageContainer>
  );
};

export default LoginPage;
