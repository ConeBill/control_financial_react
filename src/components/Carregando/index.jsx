import { Spinner } from 'reactstrap';
import './style.css';

const Carregando = ({ loading, message = "Carregando..." }) => {
    if (!loading) return null;

    return (
        <div className="overlay">
            <div className="loading-container">
                <Spinner animation="grow" color="secondary" />
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Carregando;
