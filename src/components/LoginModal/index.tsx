import { FormEvent, useContext,  useState } from 'react'

import {LoginContext} from '../../contexts/LoginContext'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.css'
import LoginImg from '../../assets/login-imagem.png'

import { BsCheckCircle } from 'react-icons/bs';
import {MdClose} from 'react-icons/md';
import {AgendamentoService} from '../../services/AgendamentoService'

export default function LoginModal(){
    const {loginSuccessed, closeLoginModal, isLoginSuccessed} = useContext(LoginContext)


    const [cellphone, setCellphone] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [schedulingDate, setSchedulingDate] = useState<Date>();
    const [schedulingHour, setSchedulingHour] = useState<string>('07:00');


    const renderInputDate = () => {
        const isWeekday = (date: Date) => {
            const day = date.getDay();
            return day !== 0 && day !== 6;
          };

        return (
            <DatePicker 
            selected={schedulingDate}
            onChange={(date: Date) => setSchedulingDate(date)} 
            dateFormat="dd/MM/yyyy"
            filterDate={isWeekday}
            minDate={new Date()}
            required
            />
        )
    }

    const maskTelefone = (value: string):string => {
        value = value.replace(/\D/g, '').substring(0, 11);
    
        value = value.replace(/^(\d\d)(\d)/g, '($1) $2');
    
        if (value.length < 14) {
          value = value.replace(/(\d{4})(\d)/, '$1-$2');
        } else { value = value.replace(/(\d{5})(\d)/, '$1-$2'); }
    
        return value;
    }

    const montarScheduled_hour = () => {
        if(schedulingDate){
            const dia = schedulingDate.getDate();
            let mes = schedulingDate.getMonth();
            const ano = schedulingDate.getFullYear();

            if(mes < 10) {
                return `${dia}-0${mes}-${ano} ${schedulingHour}`
            } else return `${dia}-${mes}-${ano} ${schedulingHour}`
        } else return ''
    }

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
        try {
            const scheduled_hour = montarScheduled_hour();
            const data = {
                name, 
                email, 
                cellphone,
                scheduled_hour,
            }
            const response = AgendamentoService(data);
            response
            .then(response => response.json())
            .then(data => {
                console.log(data.message)
                loginSuccessed()
            })
            .catch()
        } catch (e) {
            console.log(e);
        }
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
                    <img src={LoginImg} alt="login-imagem"/>
                    <form onSubmit={handleSubmit} className="formLogin">
                        <h1>Agende seu <span>horário</span></h1>
                        <div>
                            <label>Nome: </label>
                            <input 
                            type="text" 
                            name="name" 
                            value={name} 
                            required 
                            onChange={(e) => {
                                setName(e.target.value.replace(/\d/g, ''))
                            }}
                            />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input 
                            type="email" 
                            name="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Telefone: </label>
                            <input 
                            type="text" 
                            name="cellphone" 
                            required 
                            onChange={(e) => {
                                setCellphone(maskTelefone(e.target.value))
                                console.log(cellphone)
                            }}
                            value={cellphone}
                            />
                        </div>
                        <div>
                            <label>Data: </label>
                            {renderInputDate()}
                        </div>
                        <div>
                            <label>Horário: </label>
                            <select 
                            name="hour" 
                            value={schedulingHour}
                            onChange={(e) => setSchedulingHour(e.target.value)} 
                            required>
                                <option value="07:00">07:00</option>
                                <option value="08:00">08:00</option>
                                <option value="11:30">11:30</option>
                                <option value="16:30">16:30</option>
                                <option value="17:30">17:30</option>
                                <option value="18:30">18:30</option>
                                <option value="19:30">19:30</option>
                            </select>
                        </div>
                        <button type="submit">
                            Agendar
                        </button>
                    </form>
                    <button 
                    type="button"
                    onClick={() => closeLoginModal()}
                    >
                         <MdClose
                            color= 'var(--gray-dark)'
                            size = {25}
                        />
                    </button>
                </div>
            }
            
        </div>
    )
}