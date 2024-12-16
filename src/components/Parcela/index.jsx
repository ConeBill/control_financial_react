

const Parcela = (parcela, onPagar) => {
    /*<div key={parcela.idParcela} className="parcela-item">
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
                </div>*/
    return (
        <div className="parcelas-list">
            {parcela.map((parcelas) => (
                <div key={parcelas.idParcela} className="parcela-item">
                    <p>Valor: R$ {parcelas.VlrTarifa}</p>
                </div>
            ))}
        </div>
    );
};

export default Parcela;