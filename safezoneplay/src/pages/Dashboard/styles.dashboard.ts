import { styled } from '@styles/stitches.config';

const StyledBody = styled('section', {});

const StyledMain = styled('section', {
  minHeight: '100vh',
  backgroundColor: '$brand1',
  paddingTop: '200px',

  h2: { fontSize: '$title5', fontFamily: '$inter' },

  '#cardlist-myGames': {
    padding: '3rem 0'
  }
});
export { StyledBody, StyledMain };
