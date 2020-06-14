// Image/Image.js

import React from 'react';

import './styles.css';

export default function Image(props) {
  return (
    <figure id={props.id}>
      <img src={props.src} alt={props.alt} ></img>
      <figcaption>{props.description}</figcaption>
    </figure>
  );
}