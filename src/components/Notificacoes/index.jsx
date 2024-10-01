import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notificacoes = ({ mensagem }) => {
    const notify = () => toast(mensagem);
    return (
        <div>
          <button onClick={notify}>Notify!</button>
          <ToastContainer />
        </div>
      );
};

export default Notificacoes;
