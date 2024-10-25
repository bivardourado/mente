import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Certifique-se de que o CSS está estilizando o cabeçalho

const Header = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Minha Aplicação Legal',
          text: 'Confira esta aplicação incrível!',
          url: window.location.href,
        });
        console.log('Compartilhado com sucesso!');
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      alert('O compartilhamento não é suportado neste navegador.');
    }
  };

  return (
    <header className="header">
      {/* Adicionando um link para o site desejado */}
      <a href="https://bivardourado.github.io/Seu_Time/" className="header-link" target="_blank" rel="noopener noreferrer">
        Projeto "Seu Time"
      </a>

      {/* Botão de compartilhamento */}
      <button className="share-button" onClick={handleShare}>
        <FontAwesomeIcon icon={faShareSquare} />
      </button>
    </header>
  );
};

export default Header;
