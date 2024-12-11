//Pacotinhos
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

//Componentes Próprios
import ComboBox from '../ComboBox';

const ModalConta = ({
  isOpen, toggle, onSalvar, optionsConta, saldo, setSaldo,
  conta, setConta, isCheckedSaldo, setIsCheckedSaldo,
  isCheckedConta, setIsCheckedConta, nota, setNota, idConta, setIdConta
}) => {

  const limpa = () => {
    if (!isCheckedConta) {
      setConta('');
    }
    if (!isCheckedSaldo) {
      setSaldo('');
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Adicionar Conta</ModalHeader>
      <ModalBody>
        <Form>
          {isCheckedConta ? (
            <FormGroup>
              <Label for="nomeconta">Nome da Conta</Label>
              <Input
                type="text"
                id="nomeconta"
                value={conta}
                onChange={(e) => setConta(e.target.value)}
              />
            </FormGroup>
          ) : (
            <FormGroup>
              <ComboBox
                label="Conta"
                options={optionsConta}
                name="contaUsr"
                id="contaUsr"
                onChange={(e) => {
                  setIdConta(e.target.value);
                }}
              />
            </FormGroup>
          )}
          <FormGroup className='check' check>
            <Label check onClick={limpa}>
              <Input
                type="checkbox"
                id="custom-switch"
                checked={isCheckedConta}
                onChange={(e) => setIsCheckedConta(e.target.checked)}
              />
              Sua conta não esta listada?
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="notasconta">Anotações:</Label>
            <Input
              type="text"
              id="notasconta"
              value={nota}
              onChange={(e) => setNota(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='check' check>
            <Label check onClick={limpa}>
              <Input
                type="checkbox"
                id="custom-switch"
                checked={isCheckedSaldo}
                onChange={(e) => setIsCheckedSaldo(e.target.checked)}
              />
              Já tem saldo em conta?
            </Label>
          </FormGroup>
          {isCheckedSaldo && (
            <FormGroup>
              <Label for="saldoConta">Saldo Inicial</Label>
              <Input
                type="number"
                id="saldoConta"
                value={saldo}
                onChange={(e) => setSaldo(e.target.value)} />
            </FormGroup>
          )}
          <Button color="primary" onClick={onSalvar}>Salvar</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalConta;
