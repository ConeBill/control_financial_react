import React, { useEffect } from 'react';

const VerificarStatusDespesa = ({ despesa, onStatusUpdate }) => {
    useEffect(() => {
        const hoje = new Date();
        const vencimento = new Date(despesa.diaVencimento);

        if (vencimento < hoje && despesa.status !== 'Atrasado') {
            onStatusUpdate(despesa, 'Atrasado');
        }
    }, [despesa, onStatusUpdate]);

    return null;
};

export default VerificarStatusDespesa;
