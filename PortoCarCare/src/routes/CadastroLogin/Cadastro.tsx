import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Cadastro.css'

const Cadastro = () => {
    return(
        <div>
            <Cabecalho/>

            <div className="paginas">
                <Link to="/"> Home / Área do cliente</Link>
            </div>

            <div className="container-l">
                <span className="title-l"></span>
                <span className="subtitle-l"></span>
                <form>
                    <input type="text" placeholder='Digite o nome' />
                    <input type="email" placeholder='Digite o email' />
                    <input type="password" placeholder='Digite a senha' />
                    <button>Registrar</button>
                </form>
                <Link to="#"><p>Você tem conta? Login</p></Link>
                    
            </div>
            <Rodape/>
        </div>
    );
};

export default Cadastro
