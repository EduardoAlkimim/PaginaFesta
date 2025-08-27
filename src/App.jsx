import React, { useState } from 'react'; // 1. Importe o useState
import './App.css';

// Importando todos os nossos componentes
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import ProductSection from './components/ProductSection/ProductSection';
import Footer from './components/Footer/Footer';

function App() {
  // 2. Crie a "memória" (estado) para guardar os itens do orçamento
  const [quoteItems, setQuoteItems] = useState([]);

  // 3. Crie a função que adiciona um produto na lista
  const handleAddToQuote = (productToAdd) => {
    // Verifica se o produto já foi adicionado
    if (quoteItems.find(item => item._id === productToAdd._id)) {
      alert(`"${productToAdd.name}" já está na sua lista de orçamento.`);
      return; // Para a função aqui para não adicionar de novo
    }

    // Adiciona o novo produto na lista e atualiza o estado
    setQuoteItems(prevItems => [...prevItems, productToAdd]);
    alert(`"${productToAdd.name}" foi adicionado ao orçamento com sucesso!`);
  };

  return (
    <div className="App">
      <Navbar />

      {/* Para você ver a mágica acontecendo, vamos exibir a lista aqui temporariamente */}
      <div className="quote-summary-temp">
        <h3>Itens no Orçamento: {quoteItems.length}</h3>
        <ul>
          {quoteItems.map(item => <li key={item._id}>{item.name}</li>)}
        </ul>
      </div>

      <main>
        <Hero />
        <Categories />
        {/* 4. Passe a função para o ProductSection */}
        <ProductSection onAddToQuote={handleAddToQuote} />
      </main>
      <Footer />
    </div>
  );
}

export default App;