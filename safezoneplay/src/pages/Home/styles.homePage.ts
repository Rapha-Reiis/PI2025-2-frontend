import { styled } from '@styles/stitches.config';

const StyledMain = styled('section', {
  minHeight: '100vh',
  backgroundColor: '$brand1',

  h2: { fontSize: '$title5', fontFamily: '$inter' },

  '#cardlist-myGames, #cardList-popularGames': {
    padding: '4rem 0'
  }
});
export { StyledMain };
