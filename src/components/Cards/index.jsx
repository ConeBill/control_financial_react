import React, { useState } from 'react';
import './style.css';
import formataData from '../../utils/formataData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

const Cards = ({ account, onClick }) => {
  const data = formataData(account.DtVencimento, true);
  return (
    <div className="account-card" onClick={onClick}>
      <div className="account-name">{account.Descr}</div>
      <div className="account-icon">
      <FontAwesomeIcon icon={faFileContract} size='2xl'/>
        {/*<img src={<FontAwesomeIcon icon={faFileContract} />} alt={account.Descr} />*/}
      </div>
      <div className="account-details">
        <p>Valor: {account.VlrTarifa}</p>
        <p>Vencimento: {data}</p>
      </div>
    </div>
  );
};

export default Cards;
