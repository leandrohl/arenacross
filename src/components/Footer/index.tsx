import React from 'react'

import './styles.css'
import logo from '../../assets/logo.png'

import {Link} from 'react-router-dom'

const Footer: React.FC = () => {
    return(
        <div className="footerContainer" id="contact">
            <div >
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="infoFooter">
                <div>
                    <h4>INFORMAÇÕES</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </div>
                <div>
                    <h4>  ARENA CROSS </h4>
                    <ul>
                        <li><a href="#ourspace">Nosso espaço</a></li>
                        <li><a href="#basiccare">Cuidados básicos</a></li>
                        <li><a href="#plans">Planos</a></li>
                    </ul>
                </div>
                <div>
                    <h4>CONTATO</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/arenacrosspv" >Instagram</a></li>
                        <li><a href="https://www.facebook.com/arenacrosspv" >Facebook</a></li>
                        <li><a href="https://web.whatsapp.com/send?phone=5518998030116" >Whatsapp</a></li>
                        <li><a href="https://www.instagram.com/arenacrosspv">Email</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p>Rua José Bonifácio 342, Centro, Presidente Venceslau, SP, CEP 19400-000</p>
                <p>© Arena Cross. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;