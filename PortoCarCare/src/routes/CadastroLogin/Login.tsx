import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Login.css'

const Login = () => {
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
                    <input type="email" placeholder='Digite o email' />
                    <input type="password" placeholder='Digite a senha' />
                    <button>Acessar</button>
                </form>
                <Link to="/cadastro"><p>Você não tem conta? Cadastro</p></Link>
                    
            </div>
            <Rodape/>
        </div>
    );
};

export default Login