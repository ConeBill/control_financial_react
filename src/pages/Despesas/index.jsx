import React, { useState, useEffect } from 'react';
import DespesaList from '../../components/DespesaList';
import api from '../../services/api';

const Despesas = () => {
    const [despesas, setDespesas] = useState([]);

    useEffect(() => {
        api.getDespesas().then(data => setDespesas(data));
    }, []);

    const handlePausar = (despesaPausada) => {
        const novasDespesas = despesas.map(despesa =>
            despesa.nome === despesaPausada.nome ? { ...despesa, status: 'Pausado' } : despesa
        );
        setDespesas(novasDespesas);
        api.atualizarDespesa(despesaPausada.nome, { status: 'Pausado' });
    };

    const handleStatusUpdate = (despesaAtualizada, novoStatus) => {
        const novasDespesas = despesas.map(despesa =>
            despesa.nome === despesaAtualizada.nome ? { ...despesa, status: novoStatus } : despesa
        );
        setDespesas(novasDespesas);
        api.atualizarDespesa(despesaAtualizada.nome, { status: novoStatus });
    };

    return (
        <div className="despesas-page">
            <h1>Lista de Despesas</h1>
            <DespesaList despesas={despesas} onPausar={handlePausar} onStatusUpdate={handleStatusUpdate} />
        </div>
    );
};

export default Despesas;
