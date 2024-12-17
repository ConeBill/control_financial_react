//Pacotinhos
import { useState, useEffect, useContext } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';

//Componentes Próprios
import ComboBox from '../ComboBox';

//Informações do usuário
import { AuthContext } from '../../context/AuthContext';

//Serviços
import api from '../../services/api';

const ModalPagamentoDespesa = ({ isOpen, toggle, despesa, onSalvar }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [dataPagamento, setDataPagamento] = useState('');
  const [valorPago, setValorPago] = useState('');
  const { idUser } = useContext(AuthContext);
  const [optionsConta, setOptionsConta] = useState([]);
  const [conta, setConta] = useState('');

  //Pegar todas as contas do usuário
  useEffect(() => {
    async function fetchData() {
      console.log('modal pagamento:');
      console.log('idUser:', idUser);
      const response = await api.getContas(idUser);
      const formattedOptions = response.map(conta => {
        console.log('conta:', conta);
        return {
          value: conta.IdConta,
          label: conta.nomeConta
        }
      })
      setOptionsConta(formattedOptions);
    };
    fetchData();
  }, [isChecked]);

  console.log('optionsConta:', optionsConta);

  const handleSalvar = () => {
    console.log(conta);
    //onSalvar({ id: despesa.id, dataPagamento, valorPago });
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
