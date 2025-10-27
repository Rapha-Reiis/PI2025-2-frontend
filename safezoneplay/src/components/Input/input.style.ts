import { styled } from '@stitches/react';

const StyledInputContainer = styled('fieldset', {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$play',
  marginBottom: '12px',
  width: '100%',

  label: { font: '$text2', color: '$whiteFixed', marginBottom: '4px' },

  input: {
    height: '3rem',
    width: '100%',
    backgroundColor: '$brand2',
    borderRadius: '2rem',
    padding: '0 1rem',
    color: '$brand4',
    fontSize: '$text1',
    border: '1px solid $brand3',
    transition: '250ms',

    '&:focus': {
      color: '$whiteFixed',
      backgroundColor: '$brand3',
      outline: 'none',
      border: '2px solid $brand4'
    }
  }
});

export default StyledInputContainer;
