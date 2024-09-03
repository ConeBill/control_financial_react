import React from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ModalEditarDespesa = ({ isOpen, toggle, despesa, onSalvar }) => {
  const [nome, setNome] = React.useState(despesa.nome || '');
  const [valor, setValor] = React.useState(despesa.valor || '');
  const [diaVencimento, setDiaVencimento] = React.useState(despesa.diaVencimento || '');

  const handleSalvar = () => {
    onSalvar({ ...despesa, nome, valor, diaVencimento });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Editar Despesa</ModalHeader>
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

export default ModalEditarDespesa;
