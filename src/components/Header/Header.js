// Header/Header.js

import React from 'react';

import './styles.css';

import { TitleLogo } from '../TitleLogo';
import { NavigationBar } from '../NavigationBar';

export default function Header() {
  return(
    <header className="container">
      <TitleLogo alt="Logo da Mirror Fashion" />
      <p className="sacola">
        Nenhum item na sacola de compras
      </p>
      <NavigationBar
        account="Sua Conta"
        desireList="Lista de Desejos"
        fidelityCard="Cartão Fidelidade"
        about="Sobre"
        help="Ajuda" />
    </header>
  );
}