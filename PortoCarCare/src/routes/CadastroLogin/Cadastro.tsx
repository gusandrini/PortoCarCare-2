import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Cadastro.css'

const Cadastro = () => {
    return (
        <div>
            {/* <Cabecalho /> */}

            <div className="paginas">
                <Link to="/"> Home / Área do cliente</Link>
            </div>

            <div className="principal">
                <div className="container-l">
                    <strong><span className="title-l">REGISTRO</span></strong>
                    <form>
                        <input type="text" placeholder='Digite o nome' />
                        <input type="email" placeholder='Digite o email' />
                        <input type="password" placeholder='Digite a senha' />
                        <Link to="/login"><button>Registrar</button></Link>
                    </form>
                    <Link to="/login"><p>Você tem conta? Login</p></Link>

                </div>
            </div>

            {/* <Rodape /> */}
        </div>
    );
};

export default Cadastro
