import React from 'react';
import DespesaItem from '../DespesaItem';
import { Col } from 'reactstrap';

const DespesaList = ({ despesas, onPausar, onStatusUpdate }) => {
    return (
        <Col xs='2' className="despesa-list">
            {despesas.map((despesa, index) => (
                <DespesaItem
                    key={index}
                    despesa={despesa}
                    onPausar={onPausar}
                    onStatusUpdate={onStatusUpdate}
                />
            ))}
        </Col>
    );
};

export default DespesaList;
