//Pacotinhos
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Form, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
//Componentes Próprios
import Carregando from '../../components/Carregando';
//Serviços
import api from '../../services/api';
//Estilos
import './style.css';

const Cadastros = () => {
    const navigate = useNavigate();

    const [usr, setUsr] = useState('');
    const [senhaUsr, setSenhaUsr] = useState('');
    const [nomeUsr, setNomeUsr] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCadastro = async () => {
        setLoading(true);
        try {
            const response = await api.cadastro(usr, nomeUsr, senhaUsr, email);
            
            if (response.status === 201) {
                setLoading(false);
                toast("Sucesso ao cadastrar novo usuario.");
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }else {
                toast(response.msg);
                setLoading(false);
            }

        } catch (error) {
            setLoading(false);
            toast("Erro no processo para cadastrar o usuario, contate o suporte!");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCadastro();
        }
    };

    return (
        <Container className="cadastro-container">
            <Carregando loading={loading}/>
            <Form className="cadastro-form" onKeyDown={handleKeyDown}>
                <h1>Cadastro</h1>
                <Label for="usrCadastro">Usuário</Label>
                <Input
                    id="usrCadastro"
                    name="usrCadastro"
                    placeholder="Um apelido"
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
                <Label for="nomeUsr">Nome Completo</Label>
                <Input
                    id="nomeUsr"
                    name="nomeUsr"
                    placeholder="Nome completo"
                    type="text"
                    onChange={(e) => setNomeUsr(e.target.value)}
                    value={nomeUsr}
                />
                <Label for="usrEmail">Email</Label>
                <Input
                    id="usrEmail"
                    name="usrEmail"
                    placeholder="exemplo@exemplo.com"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <Button color="primary" onClick={handleCadastro}>Cadastrar</Button>
            </Form>
            <ToastContainer />
        </Container>
    );
};

export default Cadastros;
