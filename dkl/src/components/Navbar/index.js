import React from 'react';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavItem, 
  NavMenu, 
  NavLinks, 
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>DKL</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
               <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
               <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Sign Up</NavLinks>
            </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar
