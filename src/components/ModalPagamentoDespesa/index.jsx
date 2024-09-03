import React from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ModalPagamentoDespesa = ({ isOpen, toggle, despesa, onSalvar }) => {
  const [dataPagamento, setDataPagamento] = React.useState('');
  const [valorPago, setValorPago] = React.useState('');

  const handleSalvar = () => {
    onSalvar({ id: despesa.id, dataPagamento, valorPago });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Pagamento de Despesa</ModalHeader>
      <ModalBody>
        <Form>
          <h5>Valor total: {despesa.valor}</h5>
          <FormGroup>
            <Label for="dataPagamento">Data de Pagamento</Label>
            <Input
              type="date"
              id="dataPagamento"
              value={dataPagamento}
              onChange={(e) => setDataPagamento(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="valorPago">Valor Pago</Label>
            <Input
              type="number"
              id="valorPago"
              value={valorPago}
              onChange={(e) => setValorPago(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" onClick={handleSalvar}>Salvar Pagamento</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalPagamentoDespesa;
