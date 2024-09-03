import React from 'react';
import { Container } from 'reactstrap';
import BotaoPersonalizado from '../BotaoPersonalizado';
import './style.css';

const AcessoRapido = ({ onGerenciarDespesas, onVerHistorico }) => {
    return (
        <Container fluid className="acesso-rapido">
            <BotaoPersonalizado
                className='bnt1'
                onClick={onGerenciarDespesas}
                texto="Gerenciar Despesas"
            />
            <BotaoPersonalizado
                className='bnt2'
                onClick={onVerHistorico}
                texto="Ver Histórico"
            />
        </Container>
    );
};

export default AcessoRapido;
