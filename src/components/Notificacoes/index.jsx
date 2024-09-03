import React from 'react';

const Notificacoes = ({ mensagem }) => {
    return (
        <div className="notificacoes">
            <h2>Notificações</h2>
            <p>{mensagem}</p>
        </div>
    );
};

export default Notificacoes;
