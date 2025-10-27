import { styled } from '@stitches/react';
import { Container } from '../../styles/Global';

const StyledLoginPageContainer = styled('section', {
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundImage: 'url("/images/backpic.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  '.container-login-elements': {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(5px) saturate(200%)",
    WebkitBackdropFilter: "blur(5px) saturate(180%)",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },

  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',

  img: {
    height: '30%',
    width: '30%',
    marginBottom: '32px'
  },

  '.logo-container': {
    display: 'flex',
    justifyContent: 'center'
  },

  form: { height: '100%', },

  [`& ${Container}`]: {
    width: '100%',
    maxWidth: '900px'
  },

  '.container-newUser': {
    marginTop: '16px',
  },

  p: {

    textAlign: 'center',
    color: '$whiteFixed',
    fontFamily: '$play',

    '& :hover': {
      color: '$brand4'
    }
  }
});

export default StyledLoginPageContainer;
