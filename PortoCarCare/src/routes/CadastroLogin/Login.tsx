import { Link } from 'react-router-dom';
// import Cabecalho from '../../components/Cabecalho/Cabecalho';
// import Rodape from '../../components/Rodape/Rodape';
import './Login.css'

const Login = () => {
    return (
        <div>
            {/* <Cabecalho /> */}

            <div className="paginas">
                <Link to="/"> Home / Área do cliente</Link>
            </div>

            <div className="principal">
                <div className="container-l">
                    <strong><span className="title-l">LOGIN</span></strong>
                    <form>
                        <input type="email" placeholder='Digite o email' />
                        <input type="password" placeholder='Digite a senha' />
                        <Link to="/"><button>Acessar</button></Link>
                    </form>
                    <Link to="/cadastro"><p>Você não tem conta? Cadastro</p></Link>

                </div>
            </div>

            {/* <Rodape /> */}
        </div>
    );
};

export default Login