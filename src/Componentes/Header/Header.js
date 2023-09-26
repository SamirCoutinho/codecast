import React from 'react';
import style from './Header.module.css';
import logoSF from '../../img/c sem fundo.png'

function Header() {
  return (
    <div className={style.flex}>
      <img src={logoSF} className="cc-logo" alt="cc" />
    </div>
);
}

export default Header;