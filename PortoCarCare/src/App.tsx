import Cabecalho from './components/Cabecalho/Cabecalho';
import Conteudo from './components/Conteudo/Conteudo';
import Rodape from './components/Rodape/Rodape';
import './components/Cabecalho/Cabecalho.css'
import './components/Conteudo/Conteudo.css'
import './components/Rodape/Rodape.css'

function App(){
  return(
    <div>
      <Cabecalho/>
        <Conteudo/>
      <Rodape/>
    </div>

  );
}

export default App;