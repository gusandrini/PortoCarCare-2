import { Link } from 'react-router-dom';
import Calculadora from '../Imagens/calculadora.png';
import MulherMotor from '../Imagens/mulher-motor.png';
import PortoCarCare from '../Imagens/portocare.png';

function Conteudo() {
    return (
        <main>
            <div className="cabecalho">
                <h1>
                    Conte com um seguro de carro, conheça a <br /> Seguro  Auto da Porto Seguro!
                </h1>
                <a className='saiba-mais' href="https://www.portoseguro.com.br/seguro-auto?utm_source=google&utm_medium=cpa&utm_campaign=automovel_na_marca_se
                arch_aon_performance_hq_growth_auto&utm_content=key_transacao_automatico_cross_marca_pesquisa_saiba-mais_nu_teste-nao_24uzq00
                229he&ref=24uzq00229he&gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ije0oTEJb6IhSgK-USQHB-55pAB6qF13TNSn_obiCI7hn7Xv5KRYsKxoCiVQQAvD_
                BwE"><strong>Saiba mais</strong></a>
            </div>
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
                    <p>Saiba mais sobre os nossos <br /> serviços</p>
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