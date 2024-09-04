import Question from '../Imagens/question.png'
import Localizacao from '../Imagens/localizacao.png'
import Whats from '../Imagens/whatsapp.png'
import Telefone from '../Imagens/telefone.png'
import Ouvidoria from '../Imagens/ouvidoria.png'
import Exclamacao from '../Imagens/ponto-de-exclamacao.png'
import Chat from '../Imagens/chat.png'



export default function Rodape(){
    return(
        <footer className="rodape">
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
        </footer>
    );
}