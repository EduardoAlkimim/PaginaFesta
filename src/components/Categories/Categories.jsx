import React from 'react';
import './Categories.css';

// IMPORTANTE: Suas imagens (caminhão, urso, blocos) devem ter fundo transparente (formato .png)
// para o efeito da nuvem colorida funcionar bem.  

import iconMasculino from '../../assets/category1.svg'; // Importe suas imagens de categoria
import iconFeminino from '../../assets/category2.svg';
import iconGeral from '../../assets/category3.svg';
// Ex: Coloque sua imagem dos blocos aqui

const Categories = () => {
  return (
    <section className="categories-section">
      {/* Título e Subtítulo */}
      <div className="section-title">
        <h2>Encontre a festa perfeita!</h2>
        <p>Coleção do momento</p>
      </div>

      {/* Container com as categorias */}
      <div className="categories-container">

        {/* Categoria 1: Masculinos */}
        <div className="category-card">
          <div className="image-background blue">
            <img src={iconMasculino} alt="Temas masculinos" />
          </div>
          <span className="category-label">Temas masculinos</span>
        </div>

        {/* Categoria 2: Femininos */}
        <div className="category-card">
          <div className="image-background pink">
            <img src={iconFeminino} alt="Temas Femininos" />
          </div>
          <span className="category-label">Temas Femininos</span>
        </div>

        {/* Categoria 3: Gerais */}
        <div className="category-card">
          <div className="image-background green">
            <img src={iconGeral} alt="Temas gerais" />
          </div>
          <span className="category-label">Temas gerais</span>
        </div>

      </div>
    </section>
  );
};

export default Categories;