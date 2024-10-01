import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import AcessoRapido from '../../components/AcessoRapido';
import { useNavigate } from 'react-router-dom';
import './style.css';

const BoasVindas = () => {
    const navigate = useNavigate();

    const handleCadastro = () => {
        navigate('/cadastros');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center">
                    <img src="/img/Logo_Lua.png" alt="Logo" className="logo" />
                </Col>
                <Col className="d-flex container-boas-vindas align-items-center" sm={4}>
                    <div className="cadlog">
                        <AcessoRapido
                            className='acesso'
                            onGerenciarDespesas={handleLogin}
                            onTextoBntOne={'Login'}
                            onVerHistorico={handleCadastro}
                            onTextoBntTwo={'Cadastro'}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="row-centered">
                <Col md="6">
                    <h1>Controle financeiro <br />
                        pessoal com toda a <br />
                        praticidade que a <br />
                        planilha não te <br />
                        oferece</h1>
                    <p>Faça login ou cadastre-se<br />
                        para começar a gerenciar suas despesas</p>
                </Col>
            </Row>
        </Container>
    );
};

export default BoasVindas;
