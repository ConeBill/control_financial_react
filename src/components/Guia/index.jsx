//Pacotinhos
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Componentes Próprios
import Parcela from '../Parcela';

//Estilo
import './style.css';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';

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

    const nomePagto = (idParcela, valor) => {
        const nome = guia.Descr;
        onPagar(nome, idParcela, valor);
    };

    console.log('guia:', guia.IdGuia);

    return (
        <Row key={guia.IdGuia} className="guia-container">
            <Col xs="2" className="guia-header">
                <h5>Id {guia.IdGuia}</h5>
            </Col>
            <Col xs="5" className="guia-header">
                <h5>{guia.Descr}</h5>
            </Col>
            <Col xs="4" className="guia-header">
                <p>Valor Total: R$ {valorTotal.toFixed(2)}</p>
            </Col>
            <Col xs="1" className="guia-header">
                <Button
                    color="info"
                    size="sm"
                    onClick={() => setMostrarParcelas(!mostrarParcelas)}>
                    {mostrarParcelas ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </Button>
                <Button color="info" size="sm">
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
            </Col>
            {mostrarParcelas && (
                <Col className="">
                    {guia.parcelas && guia.parcelas.length > 0 ? (
                        <Parcela
                            parcelasGuia={guia.parcelas}
                            nomePagto={nomePagto}
                        />
                    ) : (<p>Nenhuma parcela encontrada</p>)
                    }
                </Col>
            )}
        </Row>
    );
};

export default Guia;
