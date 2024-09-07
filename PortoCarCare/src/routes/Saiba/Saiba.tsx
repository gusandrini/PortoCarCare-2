import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Saiba.css'

const Saiba = () => {
    return(
        <div>
            <Cabecalho/>

            <div className="paginas">
                <Link to="/"> Home / Saiba mais</Link>
            </div>

            <Rodape/>
        </div>
    );
};

export default Saiba