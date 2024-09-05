import PortoCarCare from '../Imagens/portocare.png'
import Calculadora from '../Imagens/calculadora.png'
import MulherMotor from '../Imagens/mulher-motor.png'
import { Link } from 'react-router-dom';

function Conteudo(){
    return (
        <main>
            <div className="inicio">
                <img src={PortoCarCare} alt="logo da PortoCarCare" />
                <h1 className="texto-inicio">Clareza no<br />diagnóstico,<br />solução eficiente.</h1>
            </div>

            <div className="imagens-inicio">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

            <div className="cards">
                <div className="assistente-virtual">
                    <img src={Calculadora} alt="calculadora" />
                    <p>Saiba mais sobre os nossos <br/> serviços</p>
                    <Link to="/saiba">Clique aqui</Link>
                </div>

                <div className="medidas-preventivas">
                    <img src={MulherMotor} alt="mulher mexendo no motor" />
                    <p>Medidas preventivas</p>
                    <Link to="/medidas">Clique aqui</Link>
                </div>
            </div>

            <div className="participantes">
                    <button><Link to="/participantes">Participantes</Link></button>
            </div>
        </main>
    );
}

export default Conteudo;