import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'

import {LoginContext} from '../../contexts/LoginContext'

import './styles.css'
import LoginImg from '../../assets/login-imagem.png'

import { BsCheckCircle } from 'react-icons/bs';
import {MdClose} from 'react-icons/md'

export default function LoginModal(){
    const {loginSuccessed, closeLoginModal, isLoginSuccessed} = useContext(LoginContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cellphone: '',
    })

    const [date, setDate] = useState('')
    const [hour, setHour] = useState('07:00:00')

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
		const {name, value} = event.target;
		
		setFormData({ ...formData, [name]: value});
	}

    function handleDataChange(event: ChangeEvent<HTMLInputElement>) {
        const date = event.target.value
        
        setDate(date)
    }

	function handleSubmit(event: FormEvent){
		event.preventDefault();

		const {name, email, cellphone} = formData;

        const scheduled_hour = date + ' ' + hour
		
		const data = {
            name, 
            email, 
            cellphone,
            scheduled_hour,
        }

		// await api.post('points', data);

		console.log(data)
        loginSuccessed()
	}

    return(
        <div className="overlay">
            {
                isLoginSuccessed ? 
                    <div className="containerSuccessed">
                        <BsCheckCircle
                            color= 'var(--orange)'
                            size = {50}
                        />
                        <strong>Agendamento concluído! </strong>
                    </div>
                :
                <div className = "containerLogin">
                    <div>
                        <img src={LoginImg} alt="login-imagem"/>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className="formLogin">
                            <h1>Agende seu <span>horário</span></h1>
                            <div>
                                <label>Nome: </label>
                                <input type="text" name="name" required onChange={handleInputChange}></input>
                            </div>
                            <div>
                                <label>Email: </label>
                                <input type="email" name="email" required onChange={handleInputChange}></input>
                            </div>
                            <div>
                                <label>Telefone: </label>
                                <input type="tel" name="cellphone" required onChange={handleInputChange}></input>
                            </div>
                            <div>
                                <label>Data: </label>
                                <input type="date" name="date" required onChange={handleDataChange}></input>
                            </div>
                            <div>
                                <label>Horário: </label>
                                <select  name="hour" required>
                                    <option value="07:00:00">07:00</option>
                                    <option value="08:00:00">08:00</option>
                                    <option value="11:30:00">11:30</option>
                                    <option value="16:30:00">16:30</option>
                                    <option value="17:30:00">17:30</option>
                                    <option value="18:30:00">18:30</option>
                                    <option value="19:30:00">19:30</option>
                                </select>
                            </div>
                            <button type="submit">
                                Agendar
                            </button>
                        </form>
                    </div>
                    <button 
                    type="button"
                    onClick={() => closeLoginModal()}
                    >
                         <MdClose
                            color= 'var(--gray-dark)'
                            size = {25}
                            className="hamburguerClose"
                        />
                    </button>
                </div>
            }
            
        </div>
    )
}