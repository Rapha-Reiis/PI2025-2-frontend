import { styled } from '@stitches/react';

const StyledLoginPageContainer = styled('section', {
  backgroundColor: '$brand1',
  minHeight: '100vh',

  img: {
    height: 'fit-content',
    width: 'fit-content'
  },

  '.logo-container': {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default StyledLoginPageContainer;
