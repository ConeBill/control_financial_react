import { useState, useContext } from 'react';
import { Container, Form, Label, Input, Button } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import api from '../../services/api';

const Login = () => {
    const navigate = useNavigate();
    const { setUser, setAut } = useContext(AuthContext);
    const [usr, setUsr] = useState('');
    const [senhaUsr, setSenhaUsr] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const handleLogin = async () => {
        try {
            const login = await api.login(usr, senhaUsr);
            
            if (login.status === 200) {
                setUser(login.usr);
                setAut(login.aut);
                return navigate('/painel');
            } else {
                toast(login.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="login-container">
            <Form className="login-form" onKeyDown={handleKeyDown}>
                <h1>Login</h1>
                <Label for="usrLogin">Usuário</Label>
                <Input
                    id="usrLogin"
                    name="usrLogin"
                    placeholder="NickName"
                    type="text"
                    onChange={(e) => setUsr(e.target.value)}
                    value={usr}
                />
                <Label for="Password">Senha</Label>
                <Input
                    id="Password"
                    name="password"
                    placeholder="Sua senha aqui"
                    type="password"
                    onChange={(e) => setSenhaUsr(e.target.value)}
                    value={senhaUsr}
                />
                <Button color="primary" onClick={handleLogin}>Logar</Button>
            </Form>
            <ToastContainer />
        </Container>
    );
};

export default Login;
