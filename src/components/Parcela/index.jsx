//Pacotinhos
import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const Parcela = ({ parcelasGuia, nomePagto }) => {
    const [parcelas, setParcelas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const formattedParcelas = parcelasGuia.map(parcela => ({
                VlrTarifa: parcela.VlrTarifa,
                Situacao: parcela.Situacao,
                DtVencimento: parcela.DtVencimento,
                NroParcela: parcela.NroParcela,
                IdParcela: parcela.IdParcela
            }));
            setParcelas(formattedParcelas);
        }
        fetchData();
    }, [parcelasGuia]);

    const initPagto = (idParcela, VlrTarifa) => {
        nomePagto(idParcela, VlrTarifa);
    };

    return (
        <div className="parcelas-list">
            {parcelas.map((parcela) => (
                <div key={parcela.idParcela} className="parcela-item">
                    <p>Valor: R$ {parcela.VlrTarifa}</p>
                    <p>Situação: {parcela.Situacao}</p>
                    <p>Vencimento: {new Date(parcela.DtVencimento).toLocaleDateString()}</p>
                    <p>Nro Parcela: {parcela.NroParcela}</p>
                    <Button
                        color="success"
                        size="sm"
                        onClick={() => initPagto(parcela.IdParcela, parcela.VlrTarifa)}>
                        Pagar
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default Parcela;