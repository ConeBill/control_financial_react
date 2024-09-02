import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../services/api';

function Despesas() {
    const [despesas, setDespesas] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const data = await api.getDespesas();
            setDespesas(data);
        }
        fetchData();
    }, []);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <Container>
            <Row className="my-4">
                <Col className="text-center">
                    <h2>Gerenciamento de Despesas</h2>
                </Col>
            </Row>
            <Row className="my-2">
                <Col className="text-right">
                    <Button color="primary" onClick={toggleModal}>Adicionar Despesa</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Despesa</th>
                                <th>Status</th>
                                <th>Valor</th>
                                <th>Valor Pausado</th>
                                <th>Pago</th>
                                <th>Nº Parcelas</th>
                                <th>Dia Vencimento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {despesas.map((despesa, index) => (
                                <tr key={index}>
                                    <td>{despesa.nome}</td>
                                    <td>{despesa.status}</td>
                                    <td>{despesa.valor}</td>
                                    <td>{despesa.valorPausado}</td>
                                    <td>{despesa.pago ? 'Sim' : 'Não'}</td>
                                    <td>{despesa.numeroParcelas}</td>
                                    <td>{despesa.diaVencimento}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Modal para adicionar nova despesa */}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Adicionar Nova Despesa</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="nomeDespesa">Nome da Despesa</Label>
                            <Input type="text" name="nomeDespesa" id="nomeDespesa" placeholder="Digite o nome da despesa" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="valorDespesa">Valor</Label>
                            <Input type="number" name="valorDespesa" id="valorDespesa" placeholder="Digite o valor da despesa" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="dataVencimento">Data de Vencimento</Label>
                            <Input type="date" name="dataVencimento" id="dataVencimento" />
                        </FormGroup>
                        <Button color="primary" type="submit">Adicionar</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </Container>
    );
}

export default Despesas;
