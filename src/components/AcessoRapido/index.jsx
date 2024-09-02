// src/components/AcessoRapido.jsx
import React from 'react';

const AcessoRapido = ({ onGerenciarDespesas, onVerHistorico }) => {
    return (
        <div className="acesso-rapido">
            <h2>Acesso Rápido</h2>
            <button onClick={onGerenciarDespesas}>Gerenciar Despesas</button>
            <button onClick={onVerHistorico}>Ver Histórico</button>
        </div>
    );
};

export default AcessoRapido;
