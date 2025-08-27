import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={logo} alt="Magic Festas Logo" />
          <p>Sua loja de artigos para festa. Transformando momentos em memórias inesquecíveis.</p>
          <div className="footer-socials">
            {/* Ícones de redes sociais */}
            <a href="#">FB</a>
            <a href="#">IN</a>
            <a href="#">TW</a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/lojas">Lojas</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Envios</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 KATAPLUM Festas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;