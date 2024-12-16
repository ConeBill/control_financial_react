//pacotinhos
import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

//Serviços
import api from '../../services/api';
import { formataData } from '../../utils/formataData';

//Componentes Próprios
import Guia from '../../components/Guia';
import BntFluid from '../../components/BntFlut'
import ModalEditarDespesa from '../../components/ModalEditarDespesa';
import ModalPagamentoDespesa from '../../components/ModalPagamentoDespesa';
import ModalAdicionarDespesa from '../../components/ModalAdicionarDespesa';
import ModalAdicionarReceita from '../../components/ModalAdicionarReceita';
import { AuthContext } from '../../context/AuthContext';

//Estilos
import './style.css';

function Despesas() {
    const [despesas, setDespesas] = useState([]);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalPagamento, setModalPagamento] = useState(false);
    const [modalAdicionar, setModalAdicionar] = useState(false);
    const [modalAdicionarReceita, setModalAdicionarReceita] = useState(false);
    const [despesaSelecionada, setDespesaSelecionada] = useState({});
    const [parcelasVisiveis, setParcelasVisiveis] = useState({});
    const { idUser } = useContext(AuthContext);
    
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const data = await api.getDespesas(idUser);
            console.log('data:', data);
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
    const toggleModalAdicionarReceita = () => setModalAdicionarReceita(!modalAdicionarReceita);
    const toggleParcelas = (idGuia) => {
        setParcelasVisiveis((prev) => ({
            ...prev,
            [idGuia]: !prev[idGuia],
        }));
    };
    const handleAdicionarReceita = async (novaReceita) => {
        try {
            const response = await api.adicionarReceita(novaReceita);
            const data = response;
            console.log(data.msg);
            setModalAdicionarReceita(false);
        } catch (error) {
            console.error('Erro ao adicionar receita:', error);
        }
    };



    //Adição de despesa
    const handleAdicionarDespesa = async (novaDespesa) => {
        const novaDespesaFormatada = novaDespesa;
        console.log('novaDespesaFormatada:', novaDespesaFormatada);
        try {
            const response = await api.adicionarDespesa(novaDespesa);
            const data = response;
            console.log(data.msg);
            setModalAdicionar(false);
        } catch (error) {
            console.error('Erro ao adicionar despesa:', error);
        }
    };
    const toggleModalPagamento = (despesa) => {
        setDespesaSelecionada(despesa);
        setModalPagamento(!modalPagamento);
    };
    
    //Voltando para a página de painel
    const togglenavigate = () => {
        navigate('/painel');
    };

    console.log('despesas:', despesas);

    return (
        <Container fluid>
            <Row className="my-4">
                <Col className="text-center">
                    <h2>Gerenciamento de Despesas</h2>
                </Col>
            </Row>
            <Row xs="2" className="my-4">
                {despesas.map((guia) => (
                    <>
                        <Col className="text-center" key={guia.idGuia}>
                            <Guia
                                key={guia.idGuia}
                                guia={guia}
                                onPagar={toggleModalPagamento}
                            />
                        </Col>
                    </>
                ))}
            </Row>
            {/*despesas.map((guia) => (
                <div key={guia.idGuia} className="guia-container">
                    <div className="guia-header">
                        <h4>{guia.Descr}</h4>
                        <p>Valor Total: R$ 0 {/*guia.valorTotal.toFixed(2)}</p>
                        <Button color="info" size="sm" onClick={() => toggleParcelas(guia.idGuia)}>
                            {parcelasVisiveis[guia.idGuia] ? "Esconder Parcelas" : "Mostrar Parcelas"}
                        </Button>
                    </div>

                    {parcelasVisiveis[guia.idGuia] && (
                        <div className="parcelas-list">
                            {guia.parcelas.map((parcela) => (
                                <div key={parcela.idParcela} className="parcela-item">
                                    <p>Nro Parcela: {parcela.NroParcela} </p>
                                    <p>Valor: R$ {parcela.VlrTarifa}</p>
                                    <p>Vencimento: {new Date(parcela.DtVencimento).toLocaleDateString()}</p>
                                    <Button color="success" size="sm" onClick={() => toggleModalPagamento(parcela)}>
                                        Pagar
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))*/}
            {/*{despesas.map((despesa, index) => (
                <GridItem
                    key={index}
                    item1={despesa.Descr}
                    onEditar={toggleModalEditar}
                    onPagar={toggleModalPagamento}
                />
            ))}*/}

            {/* Botão flutuante */}
            <BntFluid
                mostrarOpcoes={false}
                toggleModal1={toggleModalAdicionar}
                toggleModal2={toggleModalAdicionarReceita}
                toggleModal3={togglenavigate}
                texto1="Adicionar Despesa"
                texto2="Adicionar Receita"
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
                toggle={() => toggleModalPagamento({})}
                despesa={despesaSelecionada}
            />
            <ModalAdicionarDespesa
                isOpen={modalAdicionar}
                toggle={toggleModalAdicionar}
                onSalvar={handleAdicionarDespesa}
            />
            <ModalAdicionarReceita // Novo modal para adicionar receita
                isOpen={modalAdicionarReceita}
                toggle={toggleModalAdicionarReceita}
                onSalvar={handleAdicionarReceita}
            />
        </Container>
    );
}

export default Despesas;
