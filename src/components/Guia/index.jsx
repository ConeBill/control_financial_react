import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './style.css';

const Guia = ({ guia, onPagar }) => {
    console.log('guia:', guia);
    console.log('onPagar:', onPagar);

    useEffect(() => {
        setValorTotal(somaParcelas(guia.parcelas));
    }, [guia]);

    const [mostrarParcelas, setMostrarParcelas] = useState(false);
    const [valorTotal, setValorTotal] = useState(0);
    function somaParcelas(parcelas) {
        if (!parcelas || parcelas.length === 0) return 0; // Validação para evitar erros

        return parcelas.reduce((total, parcela) => {
            return total + (parseFloat(parcela.VlrTarifa) || 0); // Soma o VlrTarifa ou 0 se for indefinido
        }, 0);
    }

    const toggleParcelas = () => setMostrarParcelas((prev) => !prev);

    return (
        <div className="guia-container">
            <div className="guia-header">
                <h4>{guia.Descr}</h4>
                <p>Valor Total: R$ {valorTotal.toFixed(2)}</p>
                <Button
                    color="info"
                    size="sm"
                    onClick={toggleParcelas}>
                    {mostrarParcelas ? "Esconder Parcelas" : "Mostrar Parcelas"}
                </Button>
                {!mostrarParcelas && (
                    <Button
                        color="info"
                        size="sm"
                    //onClick={toggleParcelas}
                    >
                        Editar Guia
                    </Button>
                )}
            </div>

            {mostrarParcelas && (
                <div className="parcelas-list">
                    {guia.parcelas.map((parcela) => (
                        <div key={parcela.idParcela} className="parcela-item">
                            <p>Valor: R$ {parcela.VlrTarifa}</p>
                            <p>Situação: {parcela.Situacao}</p>
                            <p>Vencimento: {new Date(parcela.DtVencimento).toLocaleDateString()}</p>
                            <p>Nro Parcela: {parcela.NroParcela}</p>
                            <Button
                                color="success"
                                size="sm"
                                onClick={() => onPagar(parcela)}>
                                Pagar
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Guia;
