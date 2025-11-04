import { styled } from '../../../stitches.config';
import { fadeIn } from '../../styles/animations';

const HeaderStyled = styled('header', {
  backgroundColor: '$brand1',
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  position: 'sticky',
  zIndex: '1',

  img: {
    width: '120px'
  },

  input: {
    maxWidth: '2'
  }
});

const Nav = styled('nav', {
  nav: {
    display: 'flex'
  }
});

const MenuContainer = styled('div', {
  cursor: 'pointer',
  backgroundColor: 'transparent',

  '& svg': {
    width: '2rem',
    height: '2rem',
    color: '$brand5',
    transition: 'color 0.3s',

    '&:hover': {
      color: '$brand3'
    },
    '@bp1': {
      display: 'none'
    }
  }
});

const NavLinks = styled('ul', {
  display: 'none',
  flexDirection: 'column',
  position: 'absolute',
  top: '60px',
  right: '0',
  backgroundColor: '#111',
  width: '200px',
  padding: '1rem',
  listStyle: 'none',
  margin: 0,
  gap: '1.5rem',

  variants: {
    open: {
      true: {
        display: 'flex',
        animation: `${fadeIn} 0.3s ease`
      }
    }
  },

  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  },

  '@bp1': {
    display: 'flex',
    flexDirection: 'row',
    position: 'static',
    width: 'auto',
    backgroundColor: 'red',
    padding: 0
  }
});

const NavItem = styled('li', {
  '& a': {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#00bcd4'
    }
  }
});

export { HeaderStyled, Nav, MenuContainer, NavLinks, NavItem };
