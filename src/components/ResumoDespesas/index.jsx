import React from 'react';

const ResumoDespesas = ({ Gasto, Ganho, Atrasado }) => {
    return (
        <div className="resumo-despesas">
            <h2>Resumo do Mês</h2>
            <div className="resumo-item">
                <span>Gasto:</span>
                <strong>{Gasto}</strong>
            </div>
            <div className="resumo-item">
                <span>Ganho:</span>
                <strong>{Ganho}</strong>
            </div>
            <div className="resumo-item">
                <span>Atrasado:</span>
                <strong>{Atrasado}</strong>
            </div>
        </div>
    );
};

export default ResumoDespesas;
