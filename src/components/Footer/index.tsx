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
                    <p>Arena Cross é um centro de fitness especializado em oferecer treinamento baseado no método de treinamento funcional conhecido como CrossFit. O CrossFit é uma abordagem de condicionamento físico que combina elementos de levantamento de peso olímpico, ginástica, cardio e outros exercícios funcionais em um programa de treinamento dinâmico e intenso.</p>
                </div>
                <div>
                    <h4>  ARENA CROSS </h4>
                    <ul>
                        <li><a href="/#ourspace">Nosso espaço</a></li>
                        <li><a href="/#basiccare">Cuidados básicos</a></li>
                        <li><a href="/#plans">Planos</a></li>
                        <li><Link to="training">Treinos</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>CONTATO</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/arenacrosspv" rel="noreferrer" target="_blank">Instagram</a></li>
                        <li><a href="https://www.facebook.com/arenacrosspv" rel="noreferrer" target="_blank" >Facebook</a></li>
                        <li><a href="https://web.whatsapp.com/send?phone=5518998030116" rel="noreferrer" target="_blank">Whatsapp</a></li>
                        <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTHWDGRCqhfCkHWCDlKlmrtPWbsMJWFMPhxhFBgchvRSgXNbzThbKDlNWfFnlLPTRCgNmL" rel="noreferrer" target="_blank">Email</a></li>
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