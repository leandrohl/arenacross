import { useContext, useState } from 'react';
import {Link} from 'react-router-dom'

import { LoginContext } from '../../contexts/LoginContext';

import {FaWhatsapp} from 'react-icons/fa'
import {FiMapPin} from 'react-icons/fi'

import {MdClose, MdMenu} from 'react-icons/md'

import logo from '../../assets/logo.png'

import './styles.css'

export default function Menu(){
    const {openLoginModal} = useContext(LoginContext)

    const [active, setActive] = useState(false)

    function menuActive(){
        if (document.body.clientWidth <= 980)
            setActive(!active)
    }
    
    return(
        <div className="menuContainer">
            <div>
                <a href="https://goo.gl/maps/fU95XS1AiU4FizWQ9"  rel="noreferrer" target="_blank">
                    <FiMapPin
                            color= 'var(--white)'
                            size = {18}
                    />
                    <span>Rua José Bonifácio 342, Presidente Venceslau, SP</span>
                </a>
                <a href="https://web.whatsapp.com/send?phone=5518998030116"  rel="noreferrer" target="_blank">
                    <FaWhatsapp
                    color= 'var(--white)'
                    size = {18}
                    />
                    <span>(18) 99803-0116</span>
                </a>
            </div>
             <nav className={active ? 'menu active': 'menu'} > 
                <Link to="/">
                    <img src={logo} alt="logo" className="menuImg"/>
                 </Link>
                 <div>
                    <ul onClick={menuActive}>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <a href="/#ourspace">Nosso espaço</a>
                        </li>
                        <li>
                            <a href="/#plans">Planos</a>
                        </li>
                        <li>
                            <Link to="/training">Treinos</Link>
                        </li>
                        <li>
                            <a href="/#contact">Contato</a>
                        </li>
                    </ul>
                    <button 
                    type="button"
                    onClick={() => {
                        menuActive()
                        openLoginModal()
                    }}
                    >
                        Agende seu horário
                    </button>
                 </div>
                 <label 
                    className="hamburguer"
                    onClick={menuActive}
                >
                    {
                        active ? 
                        <MdClose
                        color= 'var(--white)'
                        size = {30}
                        className="hamburguerClose"
                        />
                        :
                        <MdMenu
                        color= 'var(--white)'
                        size = {30}
                        />
                    }
                </label>
            </nav>
        </div>
    )
}