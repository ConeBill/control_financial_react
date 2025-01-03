import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

//Pacotinhos proprios
import formataData from '../../utils/formataData';

// Estilo
import './style.css';

const Transacoes = ({ transacao, deleteTran }) => {
console.log(transacao.parcela.guia.Descr);
 const handleDelete = () => {
        deleteTran(transacao.IdMovimento);
 };
    return (
        <Row key={transacao.id} className="transacao-container">
            <Col xs="1" className="transacao-header">
                <h5>Id</h5>
                <h5>{transacao.IdMovimento}</h5>
            </Col>
            <Col xs="2" className="transacao-header">
                <p>Descrição</p>
                <p>{transacao.parcela.guia.Descr}</p>
            </Col>
            <Col xs="2" className="transacao-header">
                <p>Nro Parcela</p>
                <p>{transacao.parcela.NroParcela}</p>
            </Col>
            <Col xs="2" className="transacao-header">
                <p>Data do Movimento</p>
                <p>{formataData(transacao.dataPagamento, true)}</p>
            </Col>
            <Col xs="2" className="transacao-header">
                <p>Data de vencimento</p>
                <p>{formataData(transacao.parcela.DtVencimento, true)}</p>
            </Col>
            <Col xs="2" className="transacao-header">
                <p>Tipo de Movimento</p>
                <p>{transacao.tipoMovimentacao}</p>
            </Col>
            <Col xs="1" className="transacao-header">
                <Button color='light' size="sm" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Col>
        </Row>
    );
};

export default Transacoes;