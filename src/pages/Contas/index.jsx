//Beleza
import './style.css';

//Pacotinhos
import { Container, Row, Col, Toast } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

//Componentes Próprios
import BntFlut from '../../components/BntFlut';
import GridLista from '../../components/GridLista';
import Carregando from '../../components/Carregando';
import ModalConta from '../../components/ModalConta';
import { AuthContext } from '../../context/AuthContext';
import ModalAdicionarReceita from '../../components/ModalAdicionarReceita';

//Serviços
import api from '../../services/api';

function Contas() {
    const [refresh, setRefresh] = useState(false);
    const [modalAdicionarReceita, setModalAdicionarReceita] = useState(false);
    const [modalAdicionar, setModalAdicionar] = useState(false);
    const [contas, setContas] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { idUser, aut } = useContext(AuthContext);
    const [valor, setValor] = useState('');
    const [optionsConta, setOptionsConta] = useState([]);
    const [conta, setConta] = useState([]);
    const [IdConta, setIdConta] = useState(0);
    const [optionsContas, setOptionsContas] = useState([]);

    //pegar todas as contas
    useEffect(() => {
        async function fetchData() {
            const response = await api.getContasFull();
            const formattedResponse = response.map(conta => {
                return {
                    value: conta.IdConta,
                    label: conta.nomeConta
                }
            });
            setOptionsContas(formattedResponse);
            setLoading(false);
        }
        fetchData();
    }, []);

    //pegar contas do usuario
    useEffect(() => {
        async function fetchData() {
            const response = await api.getContas(idUser);
            const formattedOptions = response.map(conta => {
                return {
                    value: conta.IdConta,
                    label: conta.nomeConta
                }
            });
            setOptionsConta(formattedOptions);
            setContas(response);
            setRefresh(false);
        }
        fetchData();
    }, [idUser, modalAdicionarReceita, refresh]);

    //pegar guias do usuario para pagar
    useEffect(() => {
        async function fetchData() {
            const data = await api.getContas(idUser);
            setContas(data);
            setLoading(false);
        }
        fetchData();
    }, [idUser]);

    const toggleModalAdicionarReceita = () => {
        setModalAdicionarReceita(!modalAdicionarReceita);
        setRefresh(true);
    };

    const onSalvar = async () => {
        const novaMovto = {
            "valorReceita": valor,
            "IdOrigem": idUser,
            "IdConta": conta
        };

        try {
            await api.adicionarReceita(novaMovto);
            setOptionsConta([]);
            setValor('');
            setConta([]);
            toggleModalAdicionarReceita();
        } catch (error) {
            console.log("error:", error)
        }
    };

    const togglenavigate = () => {
        navigate('/painel');
    };

    //Adição de conta
    const [nota, setNota] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [saldo, setSaldo] = useState('');
    const [isCheckedSaldo, setIsCheckedSaldo] = useState(false);
    const [isCheckedConta, setIsCheckedConta] = useState(false);

    const limpaConta = () => {
        setConta('');
        setNota('');
        setSaldo('');
        setIsCheckedSaldo(false);
        setIsCheckedConta(false);
        setModalAdicionar(!modalAdicionar);
        setIdConta(0);
    };

    const toggleModalAdicionar = () => {
        limpaConta();
        setModalAdicionar(!modalAdicionar);
        setRefresh(true);
    };

    //Função para salvar conta
    const onSalvarConta = () => {
        let novaConta;
        if (IdConta > 0) {
            novaConta = {
                "IdConta": IdConta,
                "IdOrigem": idUser,
                "Nota": nota,
                "Saldo": saldo,
            };
        } else {
            novaConta = {
                "nomeConta": conta,
                "IdOrigem": idUser,
                "Nota": nota,
                "Saldo": saldo,
            };
        }
        console.log(novaConta);
        try {
            api.adicionarConta(novaConta);
            limpaConta();
        } catch (error) {
            console.log("error:", error);
        }
    };

    return (
        <Container fluid>
            <Carregando loading={loading} />
            <ToastContainer />
            < BntFlut
                toggleModal1={toggleModalAdicionar}
                toggleModal2={togglenavigate}
                texto1='Adicionar conta'
                texto2='Voltar'
            />
            <Row className="my-4">
                <Col className="text-center">
                    <h2>Gerenciamento de Contas</h2>
                </Col>
            </Row>
            <Row xs='2' >
                <GridLista
                    itens={contas}
                    toggle={toggleModalAdicionarReceita} />
            </Row>
            {/* Janelinhas */}
            <ModalConta
                isOpen={modalAdicionar}
                toggle={toggleModalAdicionar}
                onSalvar={onSalvarConta}
                optionsConta={optionsContas}
                nota={nota}
                setNota={setNota}
                saldo={saldo}
                setSaldo={setSaldo}
                isCheckedSaldo={isCheckedSaldo}
                setIsCheckedSaldo={setIsCheckedSaldo}
                isCheckedConta={isCheckedConta}
                setIsCheckedConta={setIsCheckedConta}
                conta={conta}
                setConta={setConta}
                idConta={IdConta}
                setIdConta={setIdConta}
            />
            <ModalAdicionarReceita
                isOpen={modalAdicionarReceita}
                toggle={toggleModalAdicionarReceita}
                onSalvar={onSalvar}
                optionsConta={optionsConta}
                setOptionsConta={setOptionsConta}
                valor={valor}
                setValor={setValor}
                setConta={setConta}
            />
        </Container>
    );
}

export default Contas;
