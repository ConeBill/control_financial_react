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
      <Col md='2'>{despesa.Descr}</Col>
    </Row>
  );
};

export default DespesaItem;
