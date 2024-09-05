import { Link } from 'react-router-dom';
import Porto from '../Imagens/porto-topo.png'


function Cabecalho(){
    return(
        <header>
            <div className="menu">
                <nav>
                    <a href="#"><img src={Porto} alt="logo da Porto Seguro" className='logo-topo' /></a>
                    <ul>
                        <li><Link to="/sobre">SOBRE NÓS</Link></li>
                        <li><a href="#">AJUDA</a></li>
                        <li><a className="watson" href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?region=us-south&integrationID=250f2872-90d1-4b69-a463-e7c03c0581c9&serviceInstanceID=cd14777c-39ac-401b-938f-9849d2bb018f">
                        ASSISTENTE VIRTUAL</a></li>
                        <li><a href="#" className="area-cli">ÁREA DO CLIENTE</a></li>
                    </ul>
                </nav>
            </div>

            <div className="cabecalho">
                <h1>
                Conte com um seguro de carro, conheça a <br /> Seguro  Auto da Porto Seguro!
                </h1>
                <a className='saiba-mais' href="https://www.portoseguro.com.br/seguro-auto?utm_source=google&utm_medium=cpa&utm_campaign=automovel_na_marca_se
                arch_aon_performance_hq_growth_auto&utm_content=key_transacao_automatico_cross_marca_pesquisa_saiba-mais_nu_teste-nao_24uzq00
                229he&ref=24uzq00229he&gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ije0oTEJb6IhSgK-USQHB-55pAB6qF13TNSn_obiCI7hn7Xv5KRYsKxoCiVQQAvD_
                BwE"><strong>Saiba mais</strong></a>
            </div>
        </header>
    );
}

export default Cabecalho;