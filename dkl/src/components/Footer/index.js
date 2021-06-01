import React from 'react';
import {
FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
Link1
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/contact">About</FooterLink>
              <FooterLink>
              <Link1 
              href="https://www.linkedin.com/company/kisslandscaping/" 
              target="_blank" 
              rel="noreferrer">
              Careers</Link1></FooterLink>
                <FooterLink to="/contact">Investors</FooterLink>
                <FooterLink to="/contact">Terms of Service</FooterLink>
                <FooterLink>(330)-354-1805</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Design</FooterLinkTitle>
                <FooterLink to="/contact">Quote</FooterLink>
                <FooterLink to="/contact">CEO</FooterLink>
              <FooterLink to="/contact"><Link1 
              href="https://www.linkedin.com/in/brendan-glancy/"
              target="_blank"
              rel="noreferrer"
              >CTO</Link1></FooterLink>
              <FooterLink><Link1
              href="https://www.linkedin.com/in/joshua-kerekes-308332210/"
              target="_blank"
              rel="noreferrer"
              >CFO</Link1></FooterLink>
              <FooterLink><Link1
              href="https://brendanglancy.github.io/webpage/"
              target="_blank"
              rel="noreferrer"
              >Web Design</Link1></FooterLink>
                <FooterLink>(330)-312-5293</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
