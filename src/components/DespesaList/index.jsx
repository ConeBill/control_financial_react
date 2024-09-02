import React from 'react';
import DespesaItem from '../DespesaItem';

const DespesaList = ({ despesas, onPausar, onStatusUpdate }) => {
    return (
        <div className="despesa-list">
            {despesas.map((despesa, index) => (
                <DespesaItem
                    key={index}
                    despesa={despesa}
                    onPausar={onPausar}
                    onStatusUpdate={onStatusUpdate}
                />
            ))}
        </div>
    );
};

export default DespesaList;
