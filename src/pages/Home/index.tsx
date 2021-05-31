import { Carousel } from 'react-bootstrap'
import carrossel from '../../assets/crossfit.png'

import imagem1 from '../..//assets/ourspace/1.jpg'
import imagem2 from '../..//assets/ourspace/2.jpg'
import imagem3 from '../..//assets/ourspace/3.jpg'
import imagem4 from '../..//assets/ourspace/4.jpg'
import imagem5 from '../..//assets/ourspace/5.jpeg'
import imagem6 from '../..//assets/ourspace/6.jpg'

import mascara from '../..//assets/icons/mascara.svg'
import alcoolemgel from '../..//assets/icons/alcool-em-gel.svg'
import garrafadeagua from '../..//assets/icons/garrafa-de-agua.svg'

import './styles.css'

import { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'


export default function Home(){
    const {openLoginModal} = useContext(LoginContext)

    return(
        <>
            <div>
                <Carousel interval={2000}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carrossel}
                        alt="carousel1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carrossel}
                        alt="carousel2"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carrossel}
                        alt="carousel3"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="containerOurSpace">
                <h1 id="ourspace">Conheça a <span>nossa academia</span></h1>
                <p>Te ajudamos a construir a sua melhor versão!</p>
                <div className="containerImages" >
                    <div className="item"  >
                        <img src={imagem1} alt="imagem1"/>
                        <span > Academia </span>
                    </div>
                    <div className="item" >
                        <img src={imagem2} alt="imagem2"/>
                        <span> Musculação </span> 
                    </div>
                    <div className="item">
                        <img src={imagem3} alt="imagem3"/>
                        <span> Funcional </span>
                    </div>
                    <div className="item">
                        <img src={imagem4} alt="imagem4"/>
                        <span> Pesos </span>
                    </div>
                    <div className="item">
                        <img src={imagem5} alt="imagem5"/>
                        <span> Cardio </span>
                    </div>
                    <div className="item">
                        <img src={imagem6} alt="imagem6"/>
                        <span> Cordas </span>
                    </div>
                </div>
            </div>
            <div className="containerBasicCare" id="basiccare">
                <h1>Cuidados <span>básicos</span></h1>
                <p>Estes cuidados são de extrema importancia para os treinos na arena cross.</p>
                <div className="infoBasicCare">
                    <div>
                        <h3>use</h3>
                        <strong>máscara</strong>
                        <img src={mascara} alt="mascara" className="icon"/>
                        <p>É obrigatório usar <span>máscara.</span> Cubra o nariz e a boca para evitar as gotículas de saliva.</p>
                    </div>
                    <div>
                        <h3>use</h3>
                        <strong>álcool em gel</strong>
                        <img src={alcoolemgel} alt="alcool em gel" className="icon"/>
                        <p >Temos <span>álcool a 70% </span>para você higienizar as mãos.</p>
                    </div>
                    <div>
                        <h3>leve</h3>
                        <strong>água</strong>
                        <img src={garrafadeagua} alt="alcool em gel" className="icon"/>
                        <p>Não se esqueça da <span> garrafinha com água. </span>Nossa academia contém um bebedouro.</p>
                    </div>
                </div>
            </div>
            <div className="plansContainer">
                <h1 id="plans">Escolha <span>seu plano </span></h1>
                <p>Treine o quanto quiser com nossos planos. Todos oferecem áreas de musculação, <br/> aeróbico, aulas especiais e de ginástica</p>
                <div className="plans"> 
                    <div>
                        <div className="titulo">
                            <span> PLANO </span>
                            <strong>NORMAL</strong>
                        </div>
                        <div className="preco">
                            <span> A PARTIR DE </span>
                            <strong>R$ 80,00</strong>
                        </div>
                        <div className="conteudo">

                        </div>
                        <div className="aproveite">
                            <button 
                            type="button"
                            onClick={openLoginModal}
                            >
                            Aproveite
                            </button>
                        </div>
                    </div>
                    <div>
                    <div className="titulo">
                            <span> PLANO </span>
                            <strong>BLACK</strong>
                        </div>
                        <div className="preco">
                            <span> A PARTIR DE </span>
                            <strong>R$ 100,00</strong>
                        </div>
                        <div className="conteudo">

                        </div>
                        <div className="aproveite">
                            <button 
                            type="button"
                            onClick={openLoginModal}
                            > 
                            Aproveite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.458191034369!2d-51.84407059431954!3d-21.87842507332725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949164c8f3f4c3a1%3A0xbab450d18e638146!2sR.%20Jos%C3%A9%20Bonif%C3%A1cio%2C%20342%20-%20Vila%20Ribeiro%2C%20Pres.%20Venceslau%20-%20SP%2C%2019400-000!5e0!3m2!1spt-BR!2sbr!4v1618774068778!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
            
            
        </>
        
    )
}