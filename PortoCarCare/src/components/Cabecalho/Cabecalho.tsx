import { Link } from 'react-router-dom';
import Porto from '../Imagens/porto-topo.png';


function Cabecalho() {
    return (
        <header>
            <div className="menu">
                <nav>
                    <a href="#"><img src={Porto} alt="logo da Porto Seguro" className='logo-topo' /></a>
                    <ul>
                        <li><Link to="/sobre">SOBRE NÓS</Link></li>
                        <li><Link to="/ajuda">AJUDA</Link></li>
                        <li><a className="watson" href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?region=us-south&integrationID=250f2872-90d1-4b69-a463-e7c03c0581c9&serviceInstanceID=cd14777c-39ac-401b-938f-9849d2bb018f">
                            ASSISTENTE VIRTUAL</a></li>
                        <li><Link to="/login">ÁREA DO CLIENTE</Link></li>
                    </ul>
                </nav>
            </div>


        </header>
    );
}

export default Cabecalho;