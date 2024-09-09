import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import './Area.css'
import { useState } from 'react';

export const Area = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return(
        <div>
            <Cabecalho/>

            <div className="paginas">
                <Link to="/"> Home / Área do cliente</Link>
            </div>

            <Rodape/>
        </div>
    );
};

