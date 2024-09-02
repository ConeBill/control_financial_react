import React from 'react';
import PausarDespesaButton from '../PausarDespesaButton';
import VerificarStatusDespesa from '../VerificarStatusDespesa';

const DespesaItem = ({ despesa, onPausar, onStatusUpdate }) => {
    return (
        <div className="despesa-item">
            <h3>{despesa.nome}</h3>
            <p>Valor: R${despesa.valor.toFixed(2)}</p>
            <p>Status: {despesa.status}</p>
            <p>Pago: {despesa.pago}</p>
            <p>Número de Parcelas: {despesa.numeroParcelas}</p>
            <p>Data de Vencimento: {despesa.diaVencimento}</p>

            <PausarDespesaButton despesa={despesa} onPausar={onPausar} />
            <VerificarStatusDespesa despesa={despesa} onStatusUpdate={onStatusUpdate} />
        </div>
    );
};

export default DespesaItem;
