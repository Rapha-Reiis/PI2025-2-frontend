import { styled } from '@styles/stitches.config';

const CardsContainer = styled('ul', {
  display: 'flex',
  gap: '16px',
  overflowX: 'auto',
  padding: '1rem',

  '&::-webkit-scrollbar': {
    height: '16px'
  },

  scrollbarColor: '#BAB195 #11091A',
  scrollbarWidth: 'thin'
});

const Card = styled('li', {
  width: '188px',
  height: '310px',
  backgroundColor: '$brand2',
  borderRadius: '$rad2',
  padding: '8px 12px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$brand3',
    transform: 'scale(1.05)'
  }
});

const CardImage = styled('div', {
  img: {
    width: '164px',
    height: '174px',
    objectFit: 'cover',
    borderRadius: '$rad1'
  },
  marginBottom: '8px'
});

const CardInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  small: {
    fontSize: '$text3'
  },

  '.gameTitle': {
    fontSize: '$subtitle3',
    fontWeight: 'bold'
  }
});

export { CardsContainer, Card, CardImage, CardInfos };
