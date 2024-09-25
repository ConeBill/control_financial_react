import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import AcessoRapido from '../../components/AcessoRapido';
import { useNavigate } from 'react-router-dom';
import './style.css';

const BoasVindas = () => {

    const navigate = useNavigate();
    const handleCadastros = () => {
        navigate('/cadastros');
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
                        onGerenciarDespesas={handleCadastros}
                        onTextoBntOne={'Login'}
                        onVerHistorico={handleCadastros}
                        onTextoBntTwo={'Cadastro'}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="row-centered">
                <Col md="6" className="text-center">
                    <h1>Bem-vindo ao seu site <br />de<br />Controle Financeiro</h1>
                    <p>Faça login ou cadastre-se<br/>
                           para começar a gerenciar<br/>
                           suas despesas</p>
                </Col>
            </Row>
        </Container>
    );
};

export default BoasVindas;
