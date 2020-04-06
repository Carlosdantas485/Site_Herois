import React from 'react';
import './styles.css';
import Logo from'../../assets/logo.svg';
import Bunner from '../../assets/heroes.png';
import{FiLogIn} from 'react-icons/fi';
export default function Login(){
    return (
        <div class="login-container">
            <section class="form">
                <img src={Logo} alt="Seja um heroi"/>
                
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder ="seu ID"/>
                    <button class="button"type="submit">Entrar</button>
                    <a href="FiLogIn">
                        <FiLogIn size={15} color="#e02041"/>
                        Não tenho cadastro</a>
                </form>

            </section>
            <img src={Bunner} alt="Heroes"/>
        </div>
    );
}