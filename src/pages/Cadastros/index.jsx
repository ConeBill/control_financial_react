import React from 'react';
import AcessoRapido from '../../components/AcessoRapido';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';
import './style.css';

const Cadastros = () => {
    const navigate = useNavigate();

    const handleClickBntOne = () => {
        navigate('/');
    };

    const handleClickBntTwo = () => {
        navigate('/despesas')
    };

    return (
        <Container fluid>
            <Row lx="12">
                <Col md="8"> </Col>
                <Col md="4" className='navHome'>
                    <AcessoRapido
                        onGerenciarDespesas={handleClickBntOne}
                        onTextoBntOne={"Painel de contas"}
                        onVerHistorico={handleClickBntTwo}
                        onTextoBntTwo={"Gerenciador de contas"}
                    />
                </Col>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <h1>Cadastro</h1>
                                <Row className="row-cols-lg-auto g-3 align-items-center">
                                    <Col className='formularios'>
                                        <Label className="visually-hidden" for="Email">
                                            Usuario
                                        </Label>
                                        <Input
                                            id="newUsr"
                                            name="newUsr"
                                            placeholder="NickName"
                                            type="text"
                                        />
                                        <Label
                                            className="visually-hidden"
                                            for="Password"
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="Password"
                                            name="password"
                                            placeholder="Sua senha aqui"
                                            type="password"
                                        />
                                        <Button>Cadastrar</Button>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <h1>Login</h1>
                                <Row className="row-cols-lg-auto g-3 align-items-center">
                                    <Col>
                                        <Label className="visually-hidden" for="Email">
                                            Usuario
                                        </Label>
                                        <Input
                                            id="usrLogin"
                                            name="usrLogin"
                                            placeholder="NickName"
                                            type="text"
                                        />
                                        <Label
                                            className="visually-hidden"
                                            for="Password"
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="Password"
                                            name="password"
                                            placeholder="Sua senha aqui"
                                            type="password"
                                        />
                                        <Button>Logar</Button>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default Cadastros;
