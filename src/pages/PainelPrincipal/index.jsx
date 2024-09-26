import React, { useContext } from 'react';
import ResumoDespesas from '../../components/ResumoDespesas';
import AcessoRapido from '../../components/AcessoRapido';
import Notificacoes from '../../components/Notificacoes';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './style.css';
import ResumoContas from '../../components/ResumoContas';
import { AuthContext } from '../../context/AuthContext';

const PainelPrincipal = () => {
    const navigate = useNavigate();
    const { user, setUser, aut, setAut } = useContext(AuthContext);
    console.log(user)

    // Dados para serem passados aos componentes temp 
    const totalGasto = 'R$ 1.521,44';
    const totalPausado = 'R$ 1.390,30';
    const totalAtrasado = 'R$ 300,00';
    const notificacaoMensagem = 'Você tem 3 despesas atrasadas.';

    // Funções que serão passadas para o componente AcessoRapido
    const handleGerenciarDespesas = () => {
        console.log('Redirecionando para Gerenciar Despesas...');
        navigate('/despesas');
    };

    const handleVerHistorico = () => {
        console.log('Redirecionando para Ver Histórico...');
    };

    return (
        <Container fluid className="home-container">
            <Row lx="12">
                <Col md="5">
                    <h1>Olá, {user.Usr}</h1>
                </Col>
                <Col md="3"></Col>
                <Col md="4" className='navHome'>
                    <AcessoRapido
                        onGerenciarDespesas={handleGerenciarDespesas}
                        onTextoBntOne={'Gerenciar Guias'}
                        onVerHistorico={handleVerHistorico}
                        onTextoBntTwo={'Histórico de pagamentos'}
                    />
                </Col>
            </Row>
            <Row>
                <Notificacoes
                    mensagem={notificacaoMensagem}
                />
            </Row>
            <Row className='m-3 bg-light p-1 shadow-sm'>
                <ResumoContas 
                    totalGasto={totalGasto}
                    totalPausado={totalPausado}
                    totalAtrasado={totalAtrasado}
                />
            </Row>
            <Row className='m-3 bg-light p-1 shadow-sm'>
                <ResumoDespesas
                    totalGasto={totalGasto}
                    totalPausado={totalPausado}
                    totalAtrasado={totalAtrasado}
                />
            </Row>
        </Container>
    );
};

export default PainelPrincipal;
