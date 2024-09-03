import PortoCarCare from '../Imagens/portocare.png'

export default function Cabecalho(){
    return(
        <header>
            <h1>PortoCarCare</h1>
            <img src={PortoCarCare} width="250px"/>
        </header>
    );
}