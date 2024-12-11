import { useState, useContext, useEffect } from 'react';
import { Container, Form, Label, Input, Button } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import api from '../../services/api';

const Login = () => {
    const navigate = useNavigate();
    const { setUser, setAut, setIdUser } = useContext(AuthContext);
    const [usr, setUsr] = useState('');
    const [senhaUsr, setSenhaUsr] = useState('');

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        const storedIdUser = sessionStorage.getItem('idUser');
        const storedToken = sessionStorage.getItem('token');

        if (storedUser && storedToken && storedIdUser) {
            setUser(JSON.parse(storedUser));
            setAut(storedToken);
            setIdUser(storedIdUser);
            navigate('/painel');
        }
    }, [navigate, setUser, setAut, setIdUser]);

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
                setIdUser(login.idusr);

                sessionStorage.setItem('user', JSON.stringify(login.usr));
                sessionStorage.setItem('idUser', JSON.stringify(login.idusr));
                sessionStorage.setItem('token', login.aut);
            } else {
                toast(login.msg);
            }
        } catch (error) {
            console.log(error);
        }
        return navigate('/painel');
    }

    return (
        <Container className="login-container">
            <Form className="login-form" onKeyDown={handleKeyDown}>
                <h1>Login</h1>
                <Label for="usrLogin">Usuário</Label>
                <Input
                    id="usrLogin"
                    name="usrLogin"
                    placeholder="Name"
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
