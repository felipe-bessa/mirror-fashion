// Footer/Footer.js

import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import LogoInverse from '../../assets/logo-rodape.png';

import { SocialMediaLinks } from '../SocialMediaLinks';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to="/">
          <img src={LogoInverse} alt="Logo da Mirror Fashion" />
        </Link>
        <SocialMediaLinks />
      </div>
    </footer>
  );
}