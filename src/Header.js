import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Cálculos Mentais',
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
      <a href="https://bivardourado.github.io/Seu_Time/" className="header-link" target="_blank" rel="noopener noreferrer">
        Projeto "Seu Time"
      </a>

      <button className="share-button" onClick={handleShare}>
        <FontAwesomeIcon icon={faShareSquare} />
      </button>
    </header>
  );
};

export default Header;
