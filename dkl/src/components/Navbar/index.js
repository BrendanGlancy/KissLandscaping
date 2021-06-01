import React, {useEffect, useState} from 'react';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavItem, 
  NavMenu, 
  NavLinks, 
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>DKL</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
               <NavLinks to='discover'
               smooth={true}
               duration={500}
               spy={true}
               exact='true'
               offset={-80}
               >Discover</NavLinks>
            </NavItem>
            <NavItem>
               <NavLinks to='services'
               smooth={true}
               duration={500}
               spy={true}
               exact='true'
               offset={-80}
               >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='service'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Contact</NavLinks>
            </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/contact'>Custom Quote</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar
