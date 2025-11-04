import LoginForm from '@components/Forms/LoginForm/LoginForm.component';
import RegisterForm from '@components/Forms/RegisterForm/RegisterForm.component';
import { Container } from '@styles/global';
import { useParams } from 'react-router-dom';
import StyledLoginPageContainer from './styles';
import logo from '@assets/sfp_logo.svg';

const StartPage = () => {
  const { type } = useParams();

  return (
    <StyledLoginPageContainer>
      <div className='backdrop-container'>
        <Container>
          <section className='container-login-elements'>
            <div className='logo-container'>
              <img src={logo} alt='logo' />
            </div>

            {type === 'login' ? (
              <LoginForm />
            ) : type === 'register' ? (
              <RegisterForm />
            ) : (
              <p>Hmmm... Parece que não já jogos por aqui!</p>
            )}
          </section>

          <section className='container-newUser'>
            {type === 'login' ? (
              <p>
                Não é usuário ainda?{' '}
                <a href='/start/register'>Cadastre-se aqui</a>
              </p>
            ) : (
              <p>
                Já é usuário? <a href='/start/login'>Faça login aqui</a>
              </p>
            )}
          </section>
        </Container>
      </div>
    </StyledLoginPageContainer>
  );
};

export default StartPage;
