import { Container } from '@styles/global';
import { PaymentContainer, PremiumPageMain } from './style.premiumPayment';
import useAuth from '@hooks/useAuth';
import { Loading } from '@components/Loading/Loading.component';
import Button from '@components/Buttons/Buttons';
import { api } from '@services/api';
import handleAxiosErrors from '@utils/axiosErrorStandard';

const PremiumPaymentPage = () => {
  const { userData, userLoading } = useAuth();

  const subscribePremium = async () => {
    const user = { email: userData?.email, userId: userData?.id, type: 'pix' };
    console.log(user);
    try {
      const subscribeRequest = await api.post('/payment', { user });
      console.log(subscribeRequest);
    } catch (error) {
      handleAxiosErrors(error);
    }
  };

  return (
    <PremiumPageMain>
      <Container>
        {userLoading ? (
          <Loading />
        ) : (
          <PaymentContainer>
            <p>Hey, {userData?.name}, você ainda não é premium!</p>
            <p>Venha se juntar nós!</p>

            <h2>Para ser premium, é só apertar o botão abaixo:</h2>
            <Button onClick={() => subscribePremium()}>SER PREMIUM</Button>

            <p>Id de usuário: {userData?.id}</p>
          </PaymentContainer>
        )}
      </Container>
    </PremiumPageMain>
  );
};

export default PremiumPaymentPage;
