import { useState } from 'react';
import GridItem from '../GridItem';
import { Col } from 'reactstrap';
import './style.css';

const GridLista = ({ itens = [], onPausar, onStatusUpdate, toggle }) => {
    const [ saldo, setSaldo ] = useState('');

    return (
        <Col xs='4' className="despesa-list">
            {itens.length > 0 ? (
                itens.map((conta, index) => (
                    < GridItem
                        key = { index }
                        item1 = { conta.nomeConta }
                        item2 = { `R$ ${conta.saldo}` }
                        onPausar = { onPausar }
                        onStatusUpdate = { onStatusUpdate }
                        toggle = { toggle }
                        className='titulo-gerenciamento'
                    />
                ))
            ) : (
            <p className="no-items-message">Nenhuma conta disponível.</p>
            )}
        </Col>
    );
};

export default GridLista;