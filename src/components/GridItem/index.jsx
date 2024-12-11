import React from 'react';
import './style.css';
import { Button, Col, Row, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons/faStarOfLife';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const GridItem = ({ item1, item2, onEditar, onStatusUpdate, toggle }) => {
  const [tooltipEditOpen, setTooltipEditOpen] = useState(false);
  const [tooltipDeleteOpen, setTooltipDeleteOpen] = useState(false);
  const campo1 = item1;
  const campo2 = item2;
  const campo3 = [];
  const campo4 = [];
  const campo5 = [];

  const toggleTooltipEdit = () => setTooltipEditOpen(!tooltipEditOpen);
  const toggleTooltipDelete = () => setTooltipDeleteOpen(!tooltipDeleteOpen);

  return (
    <Row className="despesa-row">
      <Col md='4'>{campo1}</Col>
      <Col md='4'>{campo2}</Col>
      <Col md='4' className="text-right">
        <Button
          id='bnt1'
          color="success"
          size="sm"
          onClick={() => onEditar(despesa)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
        <Tooltip
          placement="top"
          isOpen={tooltipEditOpen}
          target="bnt1"
          toggle={toggleTooltipEdit}>
          Editar Conta
        </Tooltip>
        <Button
        id='bnt2'
          color="success"
          size="sm"
          onClick={toggle}>
          <FontAwesomeIcon icon={faStarOfLife} />
        </Button>
        <Tooltip
          placement="top"
          isOpen={tooltipDeleteOpen}
          target="bnt2"
          toggle={toggleTooltipDelete}>
          Adicionar Saldo
        </Tooltip>
      </Col>
    </Row>
  );
};

export default GridItem;
