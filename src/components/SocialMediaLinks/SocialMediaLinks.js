// SocialMediaLinks/SocialMediaLinks.js

import React from 'react';

import './styles.css';

import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';

export default function SocialMediaLinks() {
  return (
    <ul className="social">
      <li>
        <a href="http://facebook.com/mirrorfashion">
          <FaFacebookF size={24} color="#f0f0f5" />
          <label>Facebook</label>
        </a>
      </li>
      <li>
        <a href="http://twitter.com/mirrorfashion">
          <FaTwitter size={24} color="#f0f0f5" />
          <label>Twitter</label>
        </a>
      </li>
      <li>
        <a href="http://plus.google.com/mirrorfashion">
          <FaGooglePlusG size={24} color="#f0f0f5" />
          <label>Google+</label>
        </a>
      </li>
    </ul>
  );
}