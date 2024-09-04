import Question from '../Imagens/question.png'
import Localizacao from '../Imagens/localizacao.png'
import Whats from '../Imagens/whatsapp.png'
import Telefone from '../Imagens/telefone.png'
import Ouvidoria from '../Imagens/ouvidoria.png'
import Exclamacao from '../Imagens/ponto-de-exclamacao.png'
import Chat from '../Imagens/chat.png'
import PretoBranco from '../Imagens/porto-preto-branco.png'
import Face from '../Imagens/facebook.png'
import Insta from '../Imagens/instagram.png'
import Youtube from '../Imagens/youtube.png'
import X from '../Imagens/x.png'
import LinkeD from '../Imagens/linkedin.png'
import Baixe from '../Imagens/play-apple.png'



function Rodape(){
    return(
        <footer className="rodape">
            <div className="redes">
                <h2>
                LINKS RÁPIDOS!
                </h2>
                <ul>
                    <li>
                        <a href="#"><img className='linkr' src={Question}/>Perguntas
                        frequentes</a>
                    </li>
                    <li>
                        <a href="#"><img className='linkr' src={Localizacao}/>Endereços</a>
                    </li>
                    <li>
                        <a href="#"><img className='linkr' src={Whats}/>WhatsApp</a>
                    </li>
                    <li>
                        <a href="#"><img className='linkr' src={Telefone}/>SAC e telefones</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><img className='linkr' src={Ouvidoria}/> Ouvidoria</a>
                    </li>
                    <li>
                        <a href="#"><img className='linkr' src={Exclamacao}/>Canal de denúncias</a>
                    </li>
                    <li>
                        <a href="#"><img className='linkr' src={Chat}/>Chat online</a>
                    </li>
                </ul>
            </div>

            <div className="parceiros">
                <h2>
                    ACOMPANHE NOSSOS <br />
                    PRINCIPAIS PARCEIROS!
                </h2>

                <div className="logo-porto-preta">
                <img src={PretoBranco} alt="logo da Porto com as cores em preto e branco" />
                </div>

                <h2>
                    ACOMPANHE NOSSAS <br />
                    PRINCIPAIS REDES SOCIAIS!
                </h2>
                <ul>
                    <li><a className='facebook-Porto' target='_blank' rel='noopener' title='site Facebook' href="https://www.facebook.com/porto"> <img src={Face}
                    alt="logo facebook" /></a>
                    </li>
                    <li><a className='instagram-Porto' target='_blank' rel='noopener' title='site Instagram' href="https://www.instagram.com/porto/"> <img src={Insta}
                    alt="logo instagram" /></a>
                    </li>
                    <li><a className='youtube' target='_blank' rel='noopener' title='site youtube' href="https://www.youtube.com/porto/"> <img src={Youtube}
                    alt="logo youtube" /></a>
                    </li>
                    <li><a className='x' target='_blank' rel='noopener' title='site X' href="https://twitter.com/portoseguro"> <img src={X}
                    alt="logo X" /></a>
                    </li>
                    <li><a className='Linkedin' target='_blank' rel='noopener' title='site Linkedin' href="https://www.linkedin.com/company/porto/?originalSubdomain=br">
                    <img src={LinkeD} alt="logo Linkedin" /></a>
                    </li>
                </ul>

                <div className="baixe-app">
                <h2>Baixe o App da Porto:</h2>
                <a className='apporto' target='_blank' rel='noopener' title='site apple e google store' href="https://www.portoseguro.com.br/app-porto-download">
                <img src={Baixe} alt="logo apple e google store" /></a>
                </div>

            </div>
        </footer>
    );
}

export default Rodape;