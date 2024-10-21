import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ModalDemonstraConta = ({ isOpen, toggle, despesa, onSalvar }) => {
  const [nome, setNome] = useState('');
  const [dataGeracao, setDataGeracao] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [idGuia, setIdGuia] = useState('');
  const [nroParcela, setNroParcela] = useState('');
  const [situacao, setSituacao] = useState('');
  const [vlrTarifa, setVlrTarifa] = useState('');
  console.log(despesa);

  //setNome(despesa.Descr);
  /*setDataGeracao(despesa.DtGeracao);
  setDataVencimento(despesa.DtVencimento);
  setIdGuia(despesa.IdGuia);
  setNroParcela(despesa.NroParcela);
  setSituacao(despesa.Situacao);
  setVlrTarifa(despesa.VlrTarifa);*/


  const handleSalvar = () => {
    //onSalvar({ id: despesa.id, dataPagamento, valorPago });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Informações da parcela</ModalHeader>
      <ModalBody>
        {/*<Form>
          <h5>Valor total: {vlrTarifa}</h5>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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
        </Form>*/}
      </ModalBody>
    </Modal>
  );
};

export default ModalDemonstraConta;
