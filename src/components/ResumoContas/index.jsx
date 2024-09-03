import React from 'react';

const ResumoContas = ({ totalGasto, totalPausado, totalAtrasado }) => {
    return (
        <div className="resumo-despesas">
            <h2>Contas para pagar</h2>
            <div className="resumo-item">
                <span>Total Gasto:</span>
                <strong>{totalGasto}</strong>
            </div>
            <div className="resumo-item">
                <span>Total Pausado:</span>
                <strong>{totalPausado}</strong>
            </div>
            <div className="resumo-item">
                <span>Total Atrasado:</span>
                <strong>{totalAtrasado}</strong>
            </div>
        </div>
    );
};

export default ResumoContas;
