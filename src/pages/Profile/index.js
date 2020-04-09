import React from 'react';

import './styles.css';
import Logo from'../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';


export default function Profile(){
    return(
        <div class="profiles-container">
            <header>
                <img src={Logo} alt="herois"/>
                <span>Bem-Vindo, Guilu</span>
            
                <Link class="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ol>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste teste teste teste tes teste tes teste tes teste teste teste  test teste testete teste testete teste testete </p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>
                    
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>
                    
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>
                    
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ol>
        </div>
    );
}