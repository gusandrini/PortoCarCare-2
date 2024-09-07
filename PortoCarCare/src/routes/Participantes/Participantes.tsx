import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import Duda from '../../components/Imagens/foto-duda.jpg'
import Gu from '../../components/Imagens/foto-cv.jpg'
import Vi from '../../components/Imagens/foto-vitor.jpg'

import './Participantes.css'

const Participantes = () => {
    return(
        <div>
            <Cabecalho/>

            <div className="paginas">
                <Link to="/"> Home / Participantes</Link>
            </div>

            <div className="cards">
                <div className="duda">
                    <img src={Duda} alt="integrante Eduarda" />
                    <p>Eduarda Tiemi Akamini Machado<br/>RM:554756</p>
                </div>

                <div className="gu">
                    <img src={Gu} alt="integrante gustavo"/>
                    <p>Gustavo de Oliveira Turci Sandrini<br/>RM:557505</p>
                </div>

                <div className="vi">
                    <img src={Vi} alt="integrante Vitor"/>
                    <p>Vitor Vinicios Araújo<br/>RM:556241</p>
                </div>
            </div>

            <Rodape/>
        </div>
    );
};

export default Participantes