// TitleLogo/TitleLogo.js

import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import logoImage from '../../assets/logo.png';

export default function TitleLogo(props) {
  return(
    <h1>
      <Link to="/"><img src={logoImage} alt={props.alt}></img></Link>
    </h1>
  );
}