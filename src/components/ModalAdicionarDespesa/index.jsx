import React, { useContext, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import './style.css';

const ModalAdicionarDespesa = ({ isOpen, toggle, onSalvar }) => {
  const { idUser } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [numeroParcelas, setNumeroParcelas] = useState('');
  const [diaVencimento, setDiaVencimento] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [vlrJuros, setVlrJuros] = useState('');

  const handleSalvar = () => {
    const novaDespesa = {
      "Descr": nome,
      "VlrTarifa": parseInt(valor),
      "Situacao": "Ativa",
      "NroParcela": numeroParcelas,
      "DtVencimento": diaVencimento,
      "IdOrigem": idUser,
      "SetorOrigem": "Usuarios",
      "VlrJuros": parseInt(vlrJuros)
    };

    try {
      onSalvar(novaDespesa);
      setNome('');
      setValor('');
      setDiaVencimento('');
      setIsChecked(false);
      setNumeroParcelas('');
      setVlrJuros('');
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
          <div className='lado'>
          <FormGroup className='bloco'>
            <Label for="valorDespesa">Valor</Label>
            <Input
              type="number"
              id="valorDespesa"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='bloco'>
            <Label for="dataVencimento">Data de Vencimento</Label>
            <Input
              type="date"
              id="dataVencimento"
              value={diaVencimento}
              onChange={(e) => setDiaVencimento(e.target.value)}
            />
          </FormGroup>
          </div>
          <FormGroup className='check' check>
            <Label check>
              <Input
                type="checkbox"
                id="custom-switch"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Tem mais de uma parcela
            </Label>
          </FormGroup>
          {isChecked && (
            <div className='lado'>
              <FormGroup className='bloco'>
                <Label for="numeroParcelas">Número de Parcelas</Label>
                <Input
                  type="number"
                  id="numeroParcelas"
                  value={numeroParcelas}
                  onChange={(e) => setNumeroParcelas(e.target.value)}
                />
              </FormGroup>
              <FormGroup className='bloco'>
                <Label for="jurosGuia">Juros da guia</Label>
                <Input
                  type="number"
                  id="jurosGuia"
                  value={vlrJuros}
                  onChange={(e) => setVlrJuros(e.target.value)}
                />
              </FormGroup>
            </div>
          )}
          <Button color="primary" onClick={handleSalvar}>Salvar</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalAdicionarDespesa;
