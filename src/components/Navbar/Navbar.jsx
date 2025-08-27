import React, { useState } from 'react'; // 1. Importe o useState
import './Navbar.css';
import logo from '/src/assets/logo.png';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // 2. Importe ícones de menu

const Navbar = () => {
  // 3. Crie o estado para controlar o menu mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 4. Crie a função para abrir/fechar o menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Logo da Loja" />
        </a>

        {/* 5. Adicione a classe 'active' quando o menu estiver aberto */}
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="/produtos" className="nav-link">Produtos</a></li>
          <li><a href="/lojas" className="nav-link">Lojas</a></li>
          <li><a href="/sobre" className="nav-link">Sobre</a></li>
        </ul>

        <div className="nav-actions">
          <a href="/carrinho" className="cart-icon">
            <FaShoppingCart />
            <span className="cart-badge">1</span>
          </a>
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* 6. Ícone do Menu Hambúrguer (só aparece no mobile) */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;