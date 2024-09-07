import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Medidas.css'

const Medidas = () => {
    return(
        <div>
            <Cabecalho/>

            <div className="paginas">
                <Link to="/"> Home / Saiba</Link>
            </div>

            <Rodape/>
        </div>
    );
};

export default Medidas