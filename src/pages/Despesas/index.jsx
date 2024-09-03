import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import api from '../../services/api';
import DespesaItem from '../../components/DespesaItem';
import ModalEditarDespesa from '../../components/ModalEditarDespesa';
import ModalPagamentoDespesa from '../../components/ModalPagamentoDespesa';
import ModalAdicionarDespesa from '../../components/ModalAdicionarDespesa';
import './style.css';

function Despesas() {
    const [despesas, setDespesas] = useState([]);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalPagamento, setModalPagamento] = useState(false);
    const [modalAdicionar, setModalAdicionar] = useState(false);
    const [despesaSelecionada, setDespesaSelecionada] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await api.getDespesas();
            setDespesas(data);
        }
        fetchData();
    }, []);

    const toggleModalEditar = (despesa) => {
        setDespesaSelecionada(despesa);
        setModalEditar(!modalEditar);
    };

    const toggleModalPagamento = (despesa) => {
        setDespesaSelecionada(despesa);
        setModalPagamento(!modalPagamento);
    };

    const toggleModalAdicionar = () => setModalAdicionar(!modalAdicionar);

    const handleSalvarEdicao = (despesaAtualizada) => {
        setModalEditar(false);
    };

    const handleSalvarPagamento = (pagamento) => {
        setModalPagamento(false);
    };

    const handlePausarDespesa = (despesaId) => {
    };

    const handleAdicionarDespesa = async (novaDespesa) => {
        try {
            console.log(novaDespesa);
            const response = await api.adicionarDespesa(novaDespesa);
    
            const data = response;
            console.log(data.msg);
            setModalAdicionar(false);
        } catch (error) {
            console.error('Erro ao adicionar despesa:', error);
        }
    };

    return (
        <Container fluid>
            <Row className="my-4">
                <Col className="text-center">
                    <h2>Gerenciamento de Despesas</h2>
                    <Button color="primary" onClick={toggleModalAdicionar}>Adicionar Despesa</Button>
                </Col>
            </Row>
            {despesas.map((despesa, index) => (
                <DespesaItem
                    key={index}
                    despesa={despesa}
                    onEditar={toggleModalEditar}
                    onPagar={toggleModalPagamento}
                    onPausar={handlePausarDespesa}
                />
            ))}
            <ModalEditarDespesa
                isOpen={modalEditar}
                toggle={() => toggleModalEditar({})}
                despesa={despesaSelecionada}
                onSalvar={handleSalvarEdicao}
            />
            <ModalPagamentoDespesa
                isOpen={modalPagamento}
                toggle={() => toggleModalPagamento({})}
                despesa={despesaSelecionada}
                onSalvar={handleSalvarPagamento}
            />
            <ModalAdicionarDespesa
                isOpen={modalAdicionar}
                toggle={toggleModalAdicionar}
                onSalvar={handleAdicionarDespesa}
            />
        </Container>
    );
}

export default Despesas;
