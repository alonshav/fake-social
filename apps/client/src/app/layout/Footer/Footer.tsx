import React from 'react';
import './Footer.css';
import { FooterStyled } from '../../styles/Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <h3>Fake Social <span>&copy;</span> 2022</h3>
      <p>About</p>
      <p>Contact Me</p>
      <p>Alon Levy Shavit</p>
    </FooterStyled>
  );
};

export default Footer;
