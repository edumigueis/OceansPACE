import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ScrollAnimation.css'; // Adapte esse caminho para seus estilos

function ScrollStart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative', marginTop: '100px', textAlign: 'center' }}>
      {/* Botão para abrir/fechar o pergaminho */}
      <button onClick={toggleScroll} style={{ padding: '10px 20px', marginBottom: '20px' }}>
        {isOpen ? 'Fechar Pergaminho' : 'Abrir Pergaminho'}
      </button>

      {/* Animação do pergaminho */}
      <motion.div
        initial={{ height: 50 }} // Altura inicial quando o pergaminho está fechado
        animate={{ height: isOpen ? 500 : 50 }} // A altura varia conforme o estado isOpen
        transition={{ duration: 1, ease: 'easeInOut' }} // Controla a duração e o efeito da animação
        style={{
          width: '300px',
          backgroundColor: '#f5deb3', // Cor do pergaminho quando aberto
          border: '2px solid #d4af37', // Borda dourada
          overflow: 'hidden',
          borderRadius: '10px',
          margin: '0 auto',
          position: 'relative',
          backgroundImage: isOpen ? 'none' : `url('/pergaminhofechado.png')`, // Exibe a imagem do pergaminho fechado
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Conteúdo do pergaminho, exibido apenas quando está aberto */}
        {isOpen && (
          <div style={{ padding: '20px', textAlign: 'center', color: '#333' }}>
            <h3>Pergaminho</h3>
            <p>
              Este é o conteúdo do pergaminho. Quando ele está aberto, você pode ler as informações
              que ele contém.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ScrollStart;
