//pacotinhos
import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

//Serviços
import api from '../../services/api';
//import formataData from '../../utils/formataData';

//Componentes Próprios
import Guia from '../../components/Guia';
import BntFluid from '../../components/BntFlut'
import ModalEditarDespesa from '../../components/ModalEditarDespesa';
import ModalPagamentoDespesa from '../../components/ModalPagamentoDespesa';
import ModalAdicionarDespesa from '../../components/ModalAdicionarDespesa';
import { AuthContext } from '../../context/AuthContext';

//Estilos
import './style.css';

function Despesas() {
    const [despesas, setDespesas] = useState([]);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalPagamento, setModalPagamento] = useState(false);
    const [modalAdicionar, setModalAdicionar] = useState(false);
    const [despesaSelecionada, setDespesaSelecionada] = useState({});
    const { idUser } = useContext(AuthContext);

    const navigate = useNavigate();

    //Buscando despesas
    useEffect(() => {
        async function fetchData() {
            const data = await api.getDespesas(idUser);
            setDespesas(data);
        }

        fetchData();
    }, []);

    const toggleModalEditar = (despesa) => {
        setDespesaSelecionada(despesa);
        setModalEditar(!modalEditar);
    };

    //Adição de receita
    const toggleModalAdicionar = () => setModalAdicionar(!modalAdicionar);

    //Adição de despesa
    const handleAdicionarDespesa = async (novaDespesa) => {
        const novaDespesaFormatada = novaDespesa;
        console.log('novaDespesaFormatada:', novaDespesaFormatada);
        try {
            const response = await api.adicionarDespesa(novaDespesa);
            const data = response.message;
            console.log('data:', data);
            setModalAdicionar(false);
            return toast.success(data);
        } catch (error) {
            console.error('Erro ao adicionar despesa:', error);
        }
    };
    const toggleModalPagamento = () => {
        setModalPagamento(!modalPagamento);
    };

    //Pagar despesa
    const handlePagarDespesa = async (pagamento) => {
        try {
            const response = await api.pagarDespesa(pagamento);
            console.log('response:', response.saldo);
            toast.success(response.message);
            toast.success(`Seu saldo atual é R$` + response.saldo);
        } catch (error) {
            console.error('Erro ao pagar despesa:', error);
            toast.error('Erro ao pagar despesa.');
        };
        toggleModalPagamento();
    };

    const onPagar = (nome, idParcela, VlrTarifa) => {
        setDespesaSelecionada({ nome, idParcela, VlrTarifa });
        toggleModalPagamento();
    };

    //Indo para a página de histórico
    const handleVerHistorico = () => {
        navigate('/historico');
    };

    //Voltando para a página de painel
    const togglenavigate = () => {
        navigate('/painel');
    };
    
    console.log('despesas:', despesas);

    return (
        <Container fluid>
            <ToastContainer />
            <Row className="my-4">
                <Col className="text-center">
                    <h2>Gerenciamento de Despesas</h2>
                </Col>
            </Row>
            {despesas.length >= 0 && (
                <Row xs="1" className="my-4">
                    {despesas.map((guia) => (
                        <>
                            <Col className="text-center" key={guia.IdGuia}>
                                <Guia
                                    guia={guia}
                                    onPagar={onPagar}
                                />
                            </Col>
                        </>
                    ))}
                </Row>
            ) || (
                <Row className="my-4">
                    <Col className="text-center">
                        <h5>Não há despesas cadastradas.</h5>
                    </Col>
                </Row>
            )}

            {/* Botão flutuante */}
            <BntFluid
                mostrarOpcoes={false}
                toggleModal1={toggleModalAdicionar}
                toggleModal2={handleVerHistorico}
                toggleModal3={togglenavigate}
                texto1="Adicionar Despesa"
                texto2="Histórico"
                texto3="Voltar"
            />

            {/* Modais */}
            <ModalEditarDespesa
                isOpen={modalEditar}
                toggle={() => toggleModalEditar({})}
                despesa={despesaSelecionada}
            />
            <ModalPagamentoDespesa
                isOpen={modalPagamento}
                toggle={toggleModalPagamento}
                despesa={despesaSelecionada}
                onPagamento={handlePagarDespesa}
            />
            <ModalAdicionarDespesa
                isOpen={modalAdicionar}
                toggle={toggleModalAdicionar}
                onSalvar={handleAdicionarDespesa}
            />
        </Container>
    );
}

export default Despesas;
