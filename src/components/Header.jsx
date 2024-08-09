import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo-digital-college.png';
import cart from '../assets/cart.png';
import search from '../assets/Search.png';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <img src={logo} alt="Digital Store" className="logoHeader"/>
      <div className="menu">
        <ul className="list">
          <li>
            <a className="tags" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="tags" href="#produtos">
              Produtos
            </a>
          </li>
          <li>
            <a className="tags" href="#categorias">
              Categorias
            </a>
          </li>
          <li>
            <a className="tags" href="#meus-pedidos">
              Meus Pedidos
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="search-container">
      <input id="search" type="text" placeholder="Pesquisar produto..." />
      <button className="button-search" type="submit">
        <img src={search} alt="lupa para pesquisas" />
      </button>
    </div>

    <div className="user-actions">
      <button className="register">
        <span className="cadastrese">Cadastre-se</span>
      </button>

      <button className="login">
        <span className="entrar">Entrar</span>
      </button>

      <div className="carrinho">
        <img className="carrinho-icon" src={cart} alt="Carrinho de compras"/>
      </div>
    </div>
  </header>
);

export default Header;
