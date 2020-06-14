// NavigationBar/NavigationBar.js

import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export default function NavigationBar(props) {
  return (
    <nav>
      <ul>
        <li><Link to="/">{props.account}</Link></li>
        <li><Link to="/">{props.desireList}</Link></li>
        <li><Link to="/">{props.fidelityCard}</Link></li>
        <li><Link to="/sobre">{props.about}</Link></li>
        <li><Link to="/">{props.help}</Link></li>
      </ul>
    </nav>
  );
}