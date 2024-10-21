import React, { useState } from 'react';
import './style.css';
import { formataData } from '../../utils/formataData';

const Cards = ({ account, onClick }) => {
  const data = formataData(account.DtVencimento)
  return (
    <div className="account-card" onClick={onClick}>
      <div className="account-name">{account.Descr}</div>
      <div className="account-icon">
        <img src={account.icon} alt={account.Descr} />
      </div>
      <div className="account-details">
        <p>Valor: {account.VlrTarifa}</p>
        <p>Vencimento: {data}</p>
      </div>
    </div>
  );
};

export default Cards;
