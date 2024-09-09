import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Ajuda.css'

const Ajuda = () => {
    return (
        <div>
            <Cabecalho />

            <div className="paginas">
                <Link to="/"> Home / Ajuda</Link>
            </div>

            <div className="contato">
                <section className="stato">
                    <form className="ftato">
                        <div className="center">
                            <label className="titulo"> ÁREA DE CONTATO:</label>
                        </div>
                        <div>
                            <label></label>
                            <input type="text" name="name" placeholder="Digite seu nome" required />
                        </div>

                        <div>
                            <label></label>
                            <input type="email" name="email" placeholder="Digite seu email" required />
                        </div>

                        <div>
                            <label></label>
                            <textarea name="message" rows={30} placeholder="Digite sua mensagem" required></textarea>
                        </div>

                        <div>
                            <input className="center" type="submit" value="Enviar" />
                        </div>
                    </form>
                </section>
            </div>

            <Rodape />
        </div>
    );
};

export default Ajuda