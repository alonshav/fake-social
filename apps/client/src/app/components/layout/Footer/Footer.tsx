import React from 'react';
import './Footer.css';
import { StyledFooterStyled } from '../../styles/StyledFooter.styled';

const Footer = () => {
  return (
    <StyledFooterStyled>
      <h3>Fake Social <span>&copy;</span> 2022</h3>
      <p>About</p>
      <p>Contact Me</p>
      <p>Alon Levy Shavit</p>
    </StyledFooterStyled>
  );
};

export default Footer;
