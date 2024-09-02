import React from 'react';
import ResumoDespesas from '../../components/ResumoDespesas';
import AcessoRapido from '../../components/AcessoRapido';
import Notificacoes from '../../components/Notificacoes';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './style.css';

const Home = () => {
    const navigate = useNavigate();

    // Dados para serem passados aos componentes
    const totalGasto = 'R$ 1.521,44';
    const totalPausado = 'R$ 1.390,30';
    const totalAtrasado = 'R$ 300,00';
    const notificacaoMensagem = 'Você tem 3 despesas atrasadas.';

    // Funções que serão passadas para o componente AcessoRapido
    const handleGerenciarDespesas = () => {
        // Lógica para redirecionar para a página de gerenciamento de despesas
        console.log('Redirecionando para Gerenciar Despesas...');
        navigate('/despesas');
    };

    const handleVerHistorico = () => {
        // Lógica para redirecionar para a página de histórico
        console.log('Redirecionando para Ver Histórico...');
    };

    return (
        <Container fluid className="home-container">
            <Row>
                <Col xs="2">
                    <h1>Bem-vindo ao Gerenciador Financeiro</h1>
                </Col>
                <Col>
                    <AcessoRapido
                        onGerenciarDespesas={handleGerenciarDespesas}
                        onVerHistorico={handleVerHistorico}
                    />
                </Col>
            </Row>
            <Row>
                <Notificacoes
                    mensagem={notificacaoMensagem}
                />
            </Row>
            <Row>
                <ResumoDespesas
                    totalGasto={totalGasto}
                    totalPausado={totalPausado}
                    totalAtrasado={totalAtrasado}
                />
            </Row>
        </Container>
    );
};

export default Home;
