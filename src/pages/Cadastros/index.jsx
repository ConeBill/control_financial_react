import AcessoRapido from '../../components/AcessoRapido';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';
import './style.css';
import api from '../../services/api';

const Cadastros = () => {
    const navigate = useNavigate();

    const [usr, setUsr] = useState('');
    const [senhaUsr, setSenhaUsr] = useState('');

    const handleClickBntOne = () => {
        navigate('/');
    };

    const handleClickBntTwo = () => {
        navigate('/despesas')
    };

    const handleLogin = () => {
        //api.login()
    }

    const handleCadastro = () => {
        console.log('cadastrndo');
    }

    return (
        <Container fluid>
            <Row lx="12">
                <Col md="8"> </Col>
                <Col md="4" className='navHome'>
                    <AcessoRapido
                        onGerenciarDespesas={handleClickBntOne}
                        onTextoBntOne={"Painel de contas"}
                        onVerHistorico={handleClickBntTwo}
                        onTextoBntTwo={"Gerenciar Guias"}
                    />
                </Col>
            </Row>
            <Row lg={10}>
                <Container fluid className='formularios'>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Form>
                                <h1>Cadastro</h1>
                                <Row className="row-cols-lg-auto g-3 align-items-center">
                                    <Col>
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
                                        <Button onClick={handleCadastro} >Cadastrar</Button>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col>
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
                                        <Button onClick={handleLogin} >Logar</Button>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default Cadastros;
