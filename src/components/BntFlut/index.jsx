import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const BntFlut = ({
    toggleModal1, 
    toggleModal2, 
    toggleModal3, 
    toggleModal4, 
    texto1 = null, 
    texto2 = null, 
    texto3 = null, 
    texto4 = null 
}) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <div className="fab-container">
            <div 
                className="fab-button" 
                onClick={() => setMostrar(!mostrar)}
                role="button" 
                tabIndex="0" 
                aria-label="Abrir opções"
            >
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className={`fab-options ${mostrar ? 'mostrar' : ''}`}>
                {texto1 && (
                    <Button color="success" onClick={toggleModal1}>
                        {texto1}
                    </Button>
                )}
                {texto2 && (
                    <Button color="success" onClick={toggleModal2}>
                        {texto2}
                    </Button>
                )}
                {texto3 && (
                    <Button color="success" onClick={toggleModal3}>
                        {texto3}
                    </Button>
                )}
                {texto4 && (
                    <Button color="success" onClick={toggleModal4}>
                        {texto4}
                    </Button>
                )}
            </div>
        </div>
    );
}

export default BntFlut;
