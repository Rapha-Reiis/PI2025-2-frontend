import { styled } from '../../../stitches.config';

const Button = styled('button', {
  variants: {
    type: {
      loginButton: {
        height: '3rem',
        width: '100%',
        backgroundColor: '$brand5',
        borderRadius: '32px',
        fontFamily: '$play',
        fontWeight: '$semibold',
        fontSize: '1.125rem',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
          backgroundColor: '$brand4'
        }
      }
    }
  }
});

export default Button;
