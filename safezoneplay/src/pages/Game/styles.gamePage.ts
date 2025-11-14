import { styled } from '@styles/stitches.config';

const StyledGamePageMain = styled('section', {
  width: '100%',
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 20, 0) 0%, #0c0814 60%), var(--bg-image)',
  transition: 'background-image 0.3s ease',
  backgroundColor: '$brand1',
  filter: 'brightness(1)'
});

const StyledGameDetailsContainer = styled('section', {
  margin: '0 auto',
  maxWidth: '80%'
});

const StyledGameContainer = styled('div', {
  paddingTop: '10rem',
  display: 'flex'
});

const StyledGameTitle = styled('div', {
  marginBottom: '2rem',
  h1: {
    fontSize: '$title1',
    fontFamily: '$inter'
  }
});

const GameDescription = styled('div', {
  marginBottom: '$3',
  p: {
    textAlign: 'justify'
  }
});

const GameGallery = styled('div', {
  display: 'flex',
  margin: '0 auto',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'center',
  marginBottom: '2rem',

  img: {
    width: '32%',
    height: '300px',
    borderRadius: '8px'
  }
});

const GameInfos = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  width: '100%',

  '.column': {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },

  '.minorDetails-title': {
    fontSize: '$subtitle4',
    fontFamily: '$inter',
    fontWeight: '$semibold',
    width: '100%'
  }
});

const GameAsideCard = styled('div', {
  height: 'fit-content',
  backgroundColor: '$brand2',
  borderRadius: '$rad1',
  position: 'sticky',

  p: { color: '$whiteFixed' },

  img: {
    width: '328px',
    height: '438px',
    borderRadius: '8px',
    objectFit: 'cover'
  },

  ul: {
    height: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignContent: 'center'
  },

  li: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
      'p, svg': {
        color: '$brand4',
        transition: 'color 0.3s'
      }
    },

    '& svg': {
      width: '1.5rem',
      height: '1.5rem',
      color: '$brand5'
    }
  }
});

export {
  StyledGamePageMain,
  StyledGameDetailsContainer,
  StyledGameContainer,
  StyledGameTitle,
  GameDescription,
  GameGallery,
  GameInfos,
  GameAsideCard
};
