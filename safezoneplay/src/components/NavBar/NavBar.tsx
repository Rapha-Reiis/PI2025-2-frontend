import SearchInput from '../SearchInput/SearchInput.components';
import logo from '../../assets/sfp_logo.svg';
import { Container } from '../../styles/global';
import { HeaderStyled, MenuContainer, Nav, NavItem, NavLinks } from './style';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <img src={logo} alt='sfc_logo' />
          <SearchInput />
          <MenuContainer
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <GiHamburgerMenu />
          </MenuContainer>

          <NavLinks open={isOpen}>
            <NavItem>
              <a href='#home'>Home</a>
            </NavItem>
            <NavItem>
              <a href='#about'>About</a>
            </NavItem>
            <NavItem>
              <a href='#services'>Services</a>
            </NavItem>
            <NavItem>
              <a href='#contact'>Contact</a>
            </NavItem>
          </NavLinks>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default NavBar;
