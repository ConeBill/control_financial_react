import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ModalAdicionarDespesa = ({ isOpen, toggle, onSalvar }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [valorPausado, setValorPausado] = useState('');
  const [status, setStatus] = useState('');
  const [pago, setPago] = useState(false);
  const [numeroParcelas, setNumeroParcelas] = useState('');
  const [diaVencimento, setDiaVencimento] = useState('');

  const handleSalvar = () => {
    const novaDespesa = {
      nome,
      valor,
      valorPausado,
      status,
      pago,
      numeroParcelas,
      diaVencimento
    };

    onSalvar(novaDespesa);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Adicionar Nova Despesa</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="nomeDespesa">Nome da Despesa</Label>
            <Input
              type="text"
              id="nomeDespesa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="valorDespesa">Valor</Label>
            <Input
              type="number"
              id="valorDespesa"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="valorPausado">Valor Pausado</Label>
            <Input
              type="number"
              id="valorPausado"
              value={valorPausado}
              onChange={(e) => setValorPausado(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="statusDespesa">Status</Label>
            <Input
              type="text"
              id="statusDespesa"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pagoDespesa">Pago</Label>
            <Input
              type="checkbox"
              id="pagoDespesa"
              checked={pago}
              onChange={(e) => setPago(e.target.checked)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="numeroParcelas">Número de Parcelas</Label>
            <Input
              type="number"
              id="numeroParcelas"
              value={numeroParcelas}
              onChange={(e) => setNumeroParcelas(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="dataVencimento">Data de Vencimento</Label>
            <Input
              type="date"
              id="dataVencimento"
              value={diaVencimento}
              onChange={(e) => setDiaVencimento(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" onClick={handleSalvar}>Salvar</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalAdicionarDespesa;
