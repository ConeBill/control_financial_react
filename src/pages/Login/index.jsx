import { useState, useContext } from 'react';
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './style.css';
import api from '../../services/api';

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser, aut, setAut } = useContext(AuthContext);
    const [usr, setUsr] = useState('');
    const [senhaUsr, setSenhaUsr] = useState('');

    const handleLogin = async () => {
        try {
            const login = await api.login(usr, senhaUsr);
            setUser(login.usr);
            setAut(login.aut);
        } catch (error) {
            console.log(error);
        }
        
            navigate('/painel');
    }

    console.log(user);
    return (
        <Container fluid>
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
                            onChange={(e) => setUsr(e.target.value)}
                            value={usr}
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
                            onChange={(e) => setSenhaUsr(e.target.value)}
                            value={senhaUsr}
                        />
                        <Button onClick={handleLogin} >Logar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Login;
