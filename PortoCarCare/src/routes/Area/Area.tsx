import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Area.css'

const Area = () => {
    return(
        <div>
            <Cabecalho/>

            <div className="paginas">
                <Link to="/"> Home / Área do cliente</Link>
            </div>

            <Rodape/>
        </div>
    );
};

export default Area