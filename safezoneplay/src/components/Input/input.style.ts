import { styled } from '@stitches/react';

const StyledInputContainer = styled('fieldset', {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$play',
  marginBottom: '12px',

  label: { font: '$text2', color: '$whiteFixed', marginBottom: '4px' },

  input: {
    height: '3rem',
    backgroundColor: '$brand2',
    borderRadius: '2rem',
    padding: '0 1rem',
    color: '$whiteFixed',
    fontSize: '$text1',
    border: '2px solid $brand3',

    '&:focus': {
      color: '$whiteFixed',
      backgroundColor: '$brand3',
      outline: 'none',
      border: '2px solid $brand4'
    }
  }
});

export default StyledInputContainer;
