import React from 'react';
import './style.css';

const BotaoPersonalizado = ({ texto, corFundo, corTexto, corHover, onClick, ...rest }) => {
  return (
    <button
      className="botao-personalizado"
      style={{
        backgroundColor: corFundo || '#4CAF50',
        color: corTexto || '#FFF',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = corHover || '#45a049'}
      onMouseOut={(e) => e.target.style.backgroundColor = corFundo || '#4CAF50'}
      onClick={onClick}
      {...rest}
    >
      {texto}
    </button>
  );
};

export default BotaoPersonalizado;
