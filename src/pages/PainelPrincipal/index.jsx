import React, { useContext, useEffect, useState } from 'react';
import ResumoDespesas from '../../components/ResumoDespesas';
import AcessoRapido from '../../components/AcessoRapido';
import Notificacoes from '../../components/Notificacoes';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './style.css';
import ResumoContas from '../../components/ResumoContas';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import Carregando from '../../components/Carregando';

const PainelPrincipal = () => {
    const navigate = useNavigate();
    const { user, setUser, aut, setAut } = useContext(AuthContext);
    const [contas, setContas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        const storedToken = sessionStorage.getItem('token');

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setAut(storedToken);
        }
        const fetchContas = async () => {
            try {
                const data = await api.getDespesasPagar();
                setContas(data);
            } catch (error) {
                console.log("Error fetching accounts: ", error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        };

        fetchContas();
    }, [navigate, setUser, setAut]);

    // Dados para serem passados aos componentes temp 
    const totalGasto = 'R$ 1.521,44';
    const totalPausado = 'R$ 1.390,30';
    const totalAtrasado = 'R$ 300,00';

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
            <Carregando loading={loading} />
            <Row lx="12">
                <Col md="5">
                    <h1>Olá, {user}</h1>
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
            <Row className='m-3 bg-light p-1 shadow-sm'>
                <ResumoContas accounts={contas} />
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
