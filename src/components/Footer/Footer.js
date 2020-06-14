// Footer/Footer.js

import React from 'react';

import './styles.css';

import LogoInverse from '../../assets/logo-rodape.png';

import { SocialMediaLinks } from '../SocialMediaLinks';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={LogoInverse} alt="Logo da Mirror Fashion" />
        <SocialMediaLinks />
      </div>
    </footer>
  );
}