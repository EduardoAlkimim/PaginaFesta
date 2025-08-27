import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Importa o card individual
import './ProductSection.css'; 

const ProductSection = ({ onAddToQuote }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://cadastramentoloja.onrender.com/produtos');
        if (!response.ok) {
          throw new Error('Não foi possível buscar os produtos.');
        }
        const data = await response.json();
        
        // Verificação para garantir que os dados são uma lista (array)
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Erro: A API não retornou uma lista de produtos.", data);
          setProducts([]); // Define como lista vazia para não quebrar o site
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); // O array vazio [] garante que a busca só acontece uma vez

  if (loading) return <div className="feedback-message">Carregando produtos...</div>;
  if (error) return <div className="feedback-message error">Erro: {error}</div>;

  return (
    <section className="product-section">
      <div className="section-header">
        <h2>Festas do momento</h2>
        <a href="/todos-produtos" className="view-all-link">Ver todos</a>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product._id} 
            product={product} 
            onAddToQuote={onAddToQuote}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;