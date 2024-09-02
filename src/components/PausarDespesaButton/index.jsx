import React from 'react';

const PausarDespesaButton = ({ despesa, onPausar }) => {
    const handlePausar = () => {
        onPausar(despesa);
    };

    return (
        <button onClick={handlePausar}>
            Pausar Despesa
        </button>
    );
};

export default PausarDespesaButton;
