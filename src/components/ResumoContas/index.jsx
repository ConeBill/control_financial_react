import React, { useState } from 'react';
import Cards from '../Cards';
//import ModalDemonstraConta from '../ModalDemonstraConta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { Button } from 'reactstrap';

const ResumoContas = ({ accounts = [] }) => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (account) => {
    setSelectedAccount(account);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAccount(null);
  };

  const handleSalvarPagamento = (dadosPagamento) => {
    console.log("Dados de pagamento salvos:", dadosPagamento);
    handleCloseModal();
  };

  return (
    <div className="account-list-container">
      {accounts.length === 0 ? (
        <>
        <p className="no-accounts-message">Nenhuma conta disponível no momento.</p>
        </>
      ) : (
        <>
          <div className="account-list">
            {accounts.map(account => (
              <Cards key={account.id} account={account} onClick={() => handleClick(account)} />
            ))}
          </div>
          {/* Verifica se uma conta foi selecionada para abrir o modal */}
          {/*<ModalDemonstraConta 
              isOpen={modalOpen}
              toggle={handleCloseModal}
              despesa={selectedAccount} 
              onSalvar={handleSalvarPagamento}
            />*/}
        </>
      )}
    </div>
  );
};

export default ResumoContas;
