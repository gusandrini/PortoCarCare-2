import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Area.css'
import { useState } from 'react';

const Area = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return(
        <div>
            <Cabecalho/>

            <div className="paginas">
                <Link to="/"> Home / Área do cliente</Link>
            </div>

            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form">
                            <span className="login-form-title">Bem vindo!</span>

                            {/* <span className="login-form-title">
                                <img src="" alt="" />
                            </span> */}

                            <div className="wrap-input">
                                <input 
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>





            <Rodape/>
        </div>
    );
};

export default Area
