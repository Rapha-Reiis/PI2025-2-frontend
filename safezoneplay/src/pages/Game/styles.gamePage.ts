import { styled } from '@styles/stitches.config';

const StyledGamePageMain = styled('section', {
  width: '100%',
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundSize: 'cover',
  backgroundImage:
    'linear-gradient(to bottom, rgba(10, 10, 20, 0) 0%, #0c0814 100%), var(--bg-image)',
  transition: 'background-image 0.3s ease',
  backgroundColor: '$brand1',
  filter: 'brightness(0.45)',

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(12,8,20,0) 1%, #0c0814 100%)',
    zIndex: 1
  }
});

export { StyledGamePageMain };
