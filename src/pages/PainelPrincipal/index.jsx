import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ResumoDespesas from '../../components/ResumoDespesas';
import AcessoRapido from '../../components/AcessoRapido';
import Notificacoes from '../../components/Notificacoes';
import ResumoContas from '../../components/ResumoContas';
import Carregando from '../../components/Carregando';
import BntFlut from '../../components/BntFlut';
import api from '../../services/api';
import './style.css';

const PainelPrincipal = () => {
    const navigate = useNavigate();
    const { user, setUser, aut, setAut, idUser, setIdUser } = useContext(AuthContext);
    const [contas, setContas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        const storedIdUser = sessionStorage.getItem('idUser');
        const storedToken = sessionStorage.getItem('token');

        if (storedUser && storedToken && storedIdUser) {
            setUser(JSON.parse(storedUser));
            setAut(storedToken);
            setIdUser(storedIdUser);
        }
    }, [setUser, setAut, setIdUser]);

    useEffect(() => {
        if (!idUser || !aut) return;  // Só executa quando idUser e aut estiverem prontos

        const fetchContas = async () => {
            try {
                const data = await api.getDespesasPagar(idUser, aut);
                setContas(data);
            } catch (error) {
                console.log("Error fetching accounts: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchContas();
    }, [idUser, aut]);

    // Dados para serem passados aos componentes temp 
    const Gasto = 'R$ 1.521,44';
    const Ganho = 'R$ 1.390,30';
    const Atrasado = 'R$ 300,00';

    // Funções que serão passadas para o componente AcessoRapido
    const handleGerenciarDespesas = () => {
        navigate('/despesas');
    };

    const handleVerHistorico = () => {
        navigate('/historico');
    };

    const handlePerfil = () => {
        console.log('Redirecionando para Ver seu perfil');
    };

    const handleContas = () => {
        navigate('/contas');
    };

    return (
        <Container fluid className="home-container">
            <Carregando loading={loading} />
            <Row lx="12">
                <Col md="5">
                    <h1>Olá, {user}</h1>
                </Col>
                <Col md="3"></Col>
            </Row>
            <Row className='m-3 bg-light p-1 shadow-sm'>
                <ResumoContas accounts={contas} />
            </Row>
            <Row className='m-3 bg-light p-1 shadow-sm'>
                <ResumoDespesas
                    Gasto={Gasto}
                    Ganho={Ganho}
                    Atrasado={Atrasado}
                />
            </Row>
            <BntFlut
                mostrarOpcoes={false}
                toggleModal1={handleContas}
                toggleModal2={handlePerfil}
                toggleModal3={handleVerHistorico}
                toggleModal4={handleGerenciarDespesas}
                texto1="Contas"
                texto2="Perfil"
                texto3="Histórico"
                texto4="Gerenciar Movimentação"
            />
        </Container>
    );
};

export default PainelPrincipal;
