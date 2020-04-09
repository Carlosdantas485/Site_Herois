import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import{FiLogIn} from 'react-icons/fi';
import Logo from'../../assets/logo.svg';
import Bunner from '../../assets/heroes.png';


export default function Login(){
    return (
        <div class="login-container">
            <section class="form">
                <img src={Logo} alt="Seja um heroi"/>
                
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder ="seu ID"/>
                    <button class="button"type="submit">Entrar</button>
                    
                    <Link className="links" to="/register">
                        <FiLogIn size={15} color="#e02041"/>
                        Não tenho cadastro
                    </Link>

                </form>

            </section>
            <img src={Bunner} alt="Heroes"/>
        </div>
    );
}