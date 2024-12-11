import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ComboBox from '../ComboBox';

const ModalAdicionarReceita = ({ isOpen, toggle, onSalvar, valor, setValor, optionsConta, setConta }) => {

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Adicionar Nova Receita</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="valoReceita">Valor</Label>
            <Input
              type="number"
              id="valoReceita"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <ComboBox
              label="Conta"
              options={optionsConta}
              name="contaUsr"
              id="contaUsr"
              onChange={(e) => setConta(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" onClick={onSalvar}>Salvar</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalAdicionarReceita;
