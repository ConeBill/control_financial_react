import React from 'react';
import { Button, Col, Row } from 'reactstrap';

const DespesaItem = ({ despesa, onEditar, onPagar, onPausar }) => {
  return (
    <Row className="despesa-row">
      <Col md='2' className="text-right">
        <Button color="warning" size="sm" onClick={() => onPausar(despesa.id)}>Pausar</Button>{' '}
        <Button color="info" size="sm" onClick={() => onEditar(despesa)}>Editar</Button>{' '}
        <Button color="success" size="sm" onClick={() => onPagar(despesa)}>Pagar</Button>
      </Col>
      <Col md='2'>{despesa.nome}</Col>
      <Col md='2'>{despesa.status}</Col>
      <Col md='1'>{despesa.valor}</Col>
      <Col md='1'>{despesa.valorPausado}</Col>
      <Col md='1'>{despesa.pago}</Col>
      <Col md='2'>{despesa.numeroParcelas}</Col>
      <Col md='1'>{despesa.diaVencimento}</Col>
    </Row>
  );
};

export default DespesaItem;
