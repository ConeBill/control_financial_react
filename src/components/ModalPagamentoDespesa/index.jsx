//Pacotinhos
import { useState, useEffect, useContext } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { toast } from 'react-toastify';

//Componentes Próprios
import ComboBox from '../ComboBox';

//Informações do usuário
import { AuthContext } from '../../context/AuthContext';

//Serviços
import api from '../../services/api';

const ModalPagamentoDespesa = ({ isOpen, toggle, despesa, onPagamento }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [dataPagamento, setDataPagamento] = useState('');
  const [valorPago, setValorPago] = useState('');
  const { idUser } = useContext(AuthContext);
  const [optionsConta, setOptionsConta] = useState([]);
  const [conta, setConta] = useState('');

  //Pegar todas as contas do usuário
  useEffect(() => {
    async function fetchData() {
      const response = await api.getContas(idUser);
      const formattedOptions = response.map(conta => {
        return {
          value: conta.IdConta,
          label: conta.nomeConta
        }
      })
      setOptionsConta(formattedOptions);
    };
    fetchData();
  }, [isChecked]);

  const preToggle = () => {
    setDataPagamento('');
    setValorPago('');
    setConta('');
    setIsChecked(false);
    toggle();
  };

  const handleSalvar = () => {
    const pagamento = {
      idParcela: despesa.idParcela,
      dataPagamento,
      valorPago,
      conta,
      idUser
    };
    onPagamento(pagamento);
    preToggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={preToggle}>
      <ModalHeader toggle={preToggle}> Nome: {despesa.nome}</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
          <Col><h5>Id: {despesa.idParcela}</h5></Col>
          <Col><h5>Total: R$ {despesa.VlrTarifa}</h5></Col>
          </Row>
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
          <FormGroup className='check' check>
            <Label check>
              <Input
                type='checkbox'
                id='custom-switch'
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Pagar com conta bancária
            </Label>
          </FormGroup>
          {isChecked && (
            <FormGroup>
              <ComboBox
                label='Conta Bancária'
                id='contaBancaria'
                options={optionsConta}
                name='contaBancaria'
                onChange={(e) => setConta(e.target.value)}
              />
            </FormGroup>
          )}
          <Button color="primary" onClick={handleSalvar}>Salvar Pagamento</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalPagamentoDespesa;
