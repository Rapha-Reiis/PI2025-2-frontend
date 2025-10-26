import StyledLoginPageContainer from './styles';
import logo from '../../assets/sfp_logo.svg';
import Input from '../../components/Input/input.component';
import Button from '../../styles/Buttons';
import { Container } from '../../styles/Global';

const LoginPage = () => {
  return (
    <StyledLoginPageContainer>
      <Container>
        <section>
          <div className='logo-container'>
            <img src={logo} alt='logo' />
          </div>

          <form action=''>
            <Input label='Email' />
            <Input label='Senha' />
            <Button type={'loginButton'}>Log in</Button>
          </form>
        </section>
      </Container>
    </StyledLoginPageContainer>
  );
};

export default LoginPage;
