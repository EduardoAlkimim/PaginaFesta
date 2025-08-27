// src/components/ProductSection/ProductCard.jsx

import React from 'react';
import './ProductCard.css';
import { FaPlus } from 'react-icons/fa';

const ProductCard = ({ product, onAddToQuote }) => {
  // AGORA USANDO OS NOMES CORRETOS DA SUA API!
  const name = product.nome || 'Produto sem nome';
  const imageUrl = product.imagem_url || 'https://via.placeholder.com/300';
  const description = product.description || product.tags || 'Descrição não disponível.'; // Use 'tags' se existir, senão o padrão
  const price = product.preco;

  return (
    <div className="product-card-container">
      <div className="product-image-wrapper">
        <img src={imageUrl} alt={name} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">
            {/* Convertemos o preço para número antes de formatar, para garantir */}
            {price != null ? `R$ ${parseFloat(price).toFixed(2)}` : 'Consulte'}
          </span>
          <button 
            className="add-to-quote-btn" 
            onClick={() => onAddToQuote(product)}
          >
            <FaPlus /> Orçamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;