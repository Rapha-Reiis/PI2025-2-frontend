import { Container } from '@styles/global';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HeaderStyled, Nav, MenuContainer, NavLinks, NavItem } from './style';
import logo from '@assets/sfp_logo.svg';
import { SearchInput } from '@components/Input/Input.component';
import { GrGamepad, GrHomeRounded } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <div className='nav-container-logo'>
            <img src={logo} alt='sfc_logo' />
          </div>
          <MenuContainer>
            <SearchInput
              type='text'
              id='searchInput'
              placeholder='O que você está jogando hoje?'
            />
            <GiHamburgerMenu
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MenuContainer>

          <NavLinks open={isOpen}>
            <NavItem>
              <a href='#home'>{<GrHomeRounded />}Home</a>
            </NavItem>
            <NavItem>
              <a href='#about'>{<GrGamepad />}Meus Jogos</a>
            </NavItem>
            <NavItem>
              <a href='#contact'>{<MdOutlineWorkspacePremium />}Area Premium</a>
            </NavItem>
            <NavItem>
              <a href='#services'>{<CgProfile />}Perfil</a>
            </NavItem>
          </NavLinks>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default NavBar;
