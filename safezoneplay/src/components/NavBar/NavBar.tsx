import SearchInput from '@components/SearchInput/SearchInput.components';
import { Container } from '@styles/global';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HeaderStyled, Nav, MenuContainer, NavLinks, NavItem } from './style';
import logo from '@assets/sfp_logo.svg';

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
