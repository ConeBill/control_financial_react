//Pacotinhos
import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Componentes Próprios
import Transacao from '../../components/Transacoes';
import BntFlut from '../../components/BntFlut';
import api from '../../services/api';

//AutiContext
import { AuthContext } from '../../context/AuthContext';

const Historico = () => {
    const { idUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [transacoes, setTransacoes] = useState([]);

    useEffect(() => {
        const buscaHistoricos = async () => {
            const response = await api.pegaHistorico(idUser);
            console.log(response);
            setTransacoes(response);
        };

        buscaHistoricos();
    }, []);
    console.log('SUCESU', transacoes);

    const handleDespesas = () => {
        navigate('/despesas');
    };

    const handleVoltar = () => {
        navigate('/painel');
    };
    const deleteTran = (IdMovimento) => {
        console.log(IdMovimento);
    }

    return (
        <Container fluid>
            <ToastContainer />
            <Row className="my-4">
                <Col className="text-center">
                    <h2>Histórico de Transações</h2>
                </Col>
            </Row>
            {transacoes.length >= 0 ? (
                <Row xs="1" className="my-4">
                    {transacoes.map((transacao) => (
                        <Col className="text-center" key={transacao.IdTransacao}>
                            <Transacao transacao={transacao} deleteTran={deleteTran}/>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Row className="my-4">
                    <Col className="text-center">
                        <p>Nenhuma transação encontrada.</p>
                    </Col>
                </Row>
            )}
            <BntFlut
            mostrarOpcoes={false}
            toggleModal1={handleDespesas}
            toggleModal2={handleVoltar}
            texto1="Gerenciar Despesas"
            texto2="Voltar"
            />
        </Container>
    );
};

export default Historico;