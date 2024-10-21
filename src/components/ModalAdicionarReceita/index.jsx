import React, { useContext, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ComboBox from '../ComboBox';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api'

const ModalAdicionarDespesa = ({ isOpen, toggle, onSalvar }) => {
  const { user } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [valorPausado, setValorPausado] = useState('');
  const [status, setStatus] = useState('');
  const [pago, setPago] = useState(false);
  const [numeroParcelas, setNumeroParcelas] = useState('');
  const [diaVencimento, setDiaVencimento] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const optionsStatus = [
    { value: '', label: 'Selecione' },
    { value: 'Em dia', label: 'Em dia' },
    { value: 'Atrasada', label: 'Atrasada' },
    { value: 'Pausada', label: 'Pausada' },
  ];

  const optionsPago = [
    { value: '', label: 'Selecione' },
    { value: 'Sim', label: 'Sim' },
    { value: 'Nao', label: 'Não' },
  ];


  const handleSalvar = () => {
    const novaDespesa = {
      "Descr": nome,
      "VlrTarifa": valor,
      "Situacao": status,
      "NroParcela": numeroParcelas,
      "DtVencimento": diaVencimento,
      "IdOrigem": user.IdUsr,
      "SetorOrigem": "Usuarios",
    };

    try {
      api.adicionarDespesa(novaDespesa);
    } catch (error) {
      console.log("error:", error)
    }
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
            <ComboBox
              label="Status"
              options={optionsStatus}
              name="statusDespesa"
              id="statusDespesa"
              onChange={handleChange}
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
