import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import api from '../../services/api';
import DespesaItem from '../../components/DespesaItem';
import ModalEditarDespesa from '../../components/ModalEditarDespesa';
import ModalPagamentoDespesa from '../../components/ModalPagamentoDespesa';
import ModalAdicionarDespesa from '../../components/ModalAdicionarDespesa';
import ModalAdicionarReceita from '../../components/ModalAdicionarReceita';
import './style.css';

function Despesas() {
    const [despesas, setDespesas] = useState([]);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalPagamento, setModalPagamento] = useState(false);
    const [modalAdicionar, setModalAdicionar] = useState(false);
    const [modalAdicionarReceita, setModalAdicionarReceita] = useState(false);
    const [despesaSelecionada, setDespesaSelecionada] = useState({});
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

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

    const toggleModalAdicionarReceita = () => setModalAdicionarReceita(!modalAdicionarReceita); // Função para controlar o modal de receita

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
            const response = await api.adicionarDespesa(novaDespesa);
            const data = response;
            console.log(data.msg);
            setModalAdicionar(false);
        } catch (error) {
            console.error('Erro ao adicionar despesa:', error);
        }
    };

    const handleAdicionarReceita = async (novaReceita) => {
        try {
            const response = await api.adicionarReceita(novaReceita);
            const data = response;
            console.log(data.msg);
            setModalAdicionarReceita(false);
        } catch (error) {
            console.error('Erro ao adicionar receita:', error);
        }
    };

    return (
        <Container fluid>
            <Row className="my-4">
                <Col className="text-center">
                    <h2>Gerenciamento de Despesas</h2>
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

            {/* Botão flutuante */}
            <div className="fab-container">
                <button className="fab-button" onClick={() => setMostrarOpcoes(!mostrarOpcoes)}>
                    +
                </button>
                {mostrarOpcoes && (
                    <div className="fab-options">
                        <Button color="success" onClick={toggleModalAdicionar}>Adicionar Despesa</Button>
                        <Button color="info" onClick={toggleModalAdicionarReceita}>Adicionar Receita</Button>
                    </div>
                )}
            </div>

            {/* Modais */}
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
            <ModalAdicionarReceita // Novo modal para adicionar receita
                isOpen={modalAdicionarReceita}
                toggle={toggleModalAdicionarReceita}
                onSalvar={handleAdicionarReceita}
            />
        </Container>
    );
}

export default Despesas;
