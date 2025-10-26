import { styled } from '@stitches/react';

const Button = styled('button', {
  variants: {
    type: {
      loginButton: {
        height: '3rem',
        width: '100%',
        backgroundColor: '$brand5',
        borderRadius: '32px',
        fontFamily: '$play',
        fontWeight: '$600',
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
