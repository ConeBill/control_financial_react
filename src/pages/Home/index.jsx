// src/pages/Home/index.jsx
import React from 'react';
import ResumoDespesas from '../../components/ResumoDespesas';
import AcessoRapido from '../../components/AcessoRapido';
import Notificacoes from '../../components/Notificacoes';
import './style.css';

const Home = () => {
    // Dados para serem passados aos componentes
    const totalGasto = 'R$ 1.521,44';
    const totalPausado = 'R$ 1.390,30';
    const totalAtrasado = 'R$ 300,00';
    const notificacaoMensagem = 'Você tem 3 despesas atrasadas.';

    // Funções que serão passadas para o componente AcessoRapido
    const handleGerenciarDespesas = () => {
        // Lógica para redirecionar para a página de gerenciamento de despesas
        console.log('Redirecionando para Gerenciar Despesas...');
    };

    const handleVerHistorico = () => {
        // Lógica para redirecionar para a página de histórico
        console.log('Redirecionando para Ver Histórico...');
    };

    return (
        <div className="home-container">
            <h1>Bem-vindo ao Gerenciador Financeiro</h1>
            <ResumoDespesas 
                totalGasto={totalGasto} 
                totalPausado={totalPausado} 
                totalAtrasado={totalAtrasado} 
            />
            <AcessoRapido 
                onGerenciarDespesas={handleGerenciarDespesas} 
                onVerHistorico={handleVerHistorico} 
            />
            <Notificacoes 
                mensagem={notificacaoMensagem} 
            />
        </div>
    );
};

export default Home;
