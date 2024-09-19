import React from 'react';
import { Container } from 'reactstrap';
import BotaoPersonalizado from '../BotaoPersonalizado';
import './style.css';

const AcessoRapido = ({ onGerenciarDespesas, onTextoBntOne, onVerHistorico, onTextoBntTwo }) => {
    return (
        <Container fluid className="acesso-rapido">
            <BotaoPersonalizado
                className='bnt1'
                onClick={onGerenciarDespesas}
                texto={onTextoBntOne}
            />
            <BotaoPersonalizado
                className='bnt2'
                onClick={onVerHistorico}
                texto={onTextoBntTwo}
            />
        </Container>
    );
};

export default AcessoRapido;
