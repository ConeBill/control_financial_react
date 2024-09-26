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


    const handleCadastro = () => {
        console.log('cadastrndo');
    }

    return (
        <Container fluid>
            <Col md={10} className='cabecalho'>
                <h1>Crie aqui sua conta</h1>
            </Col>
            <Col md={10}>
                <Form>

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
                            <Button onClick={handleCadastro} >Criar conta</Button>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Container>
    );
};

export default Cadastros;
