//Pacotinhos
import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

//Componentes Próprios
import Parcela from '../Parcela';

//Estilo
import './style.css';

const Guia = ({ guia, onPagar }) => {
    const [mostrarParcelas, setMostrarParcelas] = useState(false);
    const [valorTotal, setValorTotal] = useState(0);

    function somaParcelas(parcelas) {
        if (!parcelas || parcelas.length === 0) return 0;
        return parcelas.reduce((total, parcela) => {
            return total + (parseFloat(parcela.VlrTarifa) || 0);
        }, 0);
    }

    useEffect(() => {
        setValorTotal(somaParcelas(guia.parcelas));
    }, [guia]);

    const toggleParcelas = () => setMostrarParcelas((prev) => !prev);

    return (
        <div className="guia-container">
            <div className="guia-header">
                <h4>{guia.Descr}</h4>
                <p>Valor Total: R$ {valorTotal.toFixed(2)}</p>
                <Button
                    color="info"
                    size="sm"
                    onClick={() => setMostrarParcelas(!mostrarParcelas)}>
                    {mostrarParcelas ? "Esconder Parcelas" : "Mostrar Parcelas"}
                </Button>
                {!mostrarParcelas && (
                    <Button
                        color="info"
                        size="sm"
                        onClick={toggleParcelas}
                    >
                        Editar Guia
                    </Button>
                )}
            </div>

            {mostrarParcelas && (
                <div className="">
                    {guia.parcelas && guia.parcelas.length > 0 ? (
                        guia.parcelas.map((parcela) => (
                            < div key={parcela.idParcela} className="parcela-item" >
                                <p>Valor: R$ {parcela.VlrTarifa}</p>
                                <p>Situação: {parcela.Situacao}</p>
                                <p>Vencimento: {new Date(parcela.DtVencimento).toLocaleDateString()}</p>
                                <p>Nro Parcela: {parcela.NroParcela}</p>
                                <Button
                                    color="success"
                                    size="sm"
                                    onClick={() => onPagar(guia)}>
                                    Pagar
                                </Button>
                            </div>
                        ))
                    ) : (<p>Nenhuma parcela encontrada</p>)
                    }
                </div>
            )}
        </div>
    );
};

export default Guia;
