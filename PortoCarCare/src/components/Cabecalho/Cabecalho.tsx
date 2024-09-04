import PortoCarCare from '../Imagens/portocare.png'
import Porto from '../Imagens/porto-topo.png'
import App from '../../App';


export default function Cabecalho(){
    return(
        <header>
            <div className="menu">
                <nav>
                    <a href={App}><img src={Porto} alt="logo da Porto Seguro" className='logo-topo' /></a>
                    <ul>
                        <li><a href="#">SOBRE NÓS</a></li>
                        <li><a href="#">AJUDA</a></li>
                        <li><a className="watson" href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?region=us-south&integrationID=250f2872-90d1-4b69-a463-e7c03c0581c9&serviceInstanceID=cd14777c-39ac-401b-938f-9849d2bb018f">
                        ASSISTENTE VIRTUAL</a></li>
                        <li><a href="#" className="area-cli">ÁREA DO CLIENTE</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}