import React from 'react';
import Nav from '../Nav/Nav.js'; 
import './Main.module.css';



import logoImage from '../../img/3 sem fundo.png'; 

function Main() {
  return (
    <div className="flex">
      <img src={logoImage} className="logo-inteira" alt="codeCast logo" />
      <Nav />
    </div>
  );
}

export default Main;
