import { styled } from '@styles/stitches.config';

const Button = styled('button', {
  height: '3rem',
  backgroundColor: '$brand5',
  borderRadius: '32px',
  fontFamily: '$play',
  fontWeight: '$semibold',
  fontSize: '1.125rem',
  transition: '250ms',

  '&:hover': {
    backgroundColor: '$brand4'
  },
  variants: {
    type: {
      loginButton: {
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
          backgroundColor: '$brand4'
        }
      },
      moreResultsButton: {
        width: '10rem'
      }
    }
  }
});

export default Button;
