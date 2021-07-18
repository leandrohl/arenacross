import { useState, useEffect} from 'react';

// import ImageTraining from '../../assets/crossfit.png' 

import {TrainingService} from '../../services/TrainingService'

import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'


import {
    Trainings,
} from './types'

import './styles.css'
  
export default function Training(){

    const [allPosts, setAllPosts] = useState<Trainings[]>()
    
    const [postPosicao, setPostPosicao] = useState<number>(0);
    const [showPost, setShowPost] = useState<Trainings>()

    const dias_da_semana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira' ]


    useEffect(() => {
        const response = TrainingService();
        response
            .then(response => response.json())
            .then(data => {
                setAllPosts(data.response);
                setShowPost(data.response[0]);
            })
            .catch()
    }, []);

    const postAnterior = () => {
        if (allPosts && postPosicao < allPosts.length) {
            setPostPosicao(postPosicao + 1)
        }
    }

    useEffect(() => {
        if(allPosts) {
            setShowPost(allPosts[postPosicao])
        }
    }, [postPosicao, allPosts])

    const postProximo = () => {
        if (postPosicao > 0){
            setPostPosicao(postPosicao - 1)
        }
    }

    const getUltimoDia = (rawDate:string) => {
        const firstDay = Number(rawDate?.slice(8, 10))
        const firstMonth = Number(rawDate?.slice(5, 7))
        let lastDay
        let lastMonth
        let monthLimit

        if(firstMonth === 1 || firstMonth === 3 || firstMonth === 5 || firstMonth === 7 || firstMonth === 8 || firstMonth === 10 || firstMonth === 12) {
            monthLimit = 31
        }
        else if(firstMonth === 2) {
            monthLimit = 29
        }
        else {
            monthLimit = 30
        }
        
        lastDay = (firstDay + 4) % monthLimit
        lastDay = lastDay === 0 ? monthLimit : lastDay
        lastDay = lastDay < 10 ? `0${lastDay}` : lastDay

        lastMonth = lastDay < firstDay ? (firstMonth+1)%12 : firstMonth
        lastMonth = lastMonth === 0 ? 12 : lastMonth
        lastMonth = lastMonth < 10 ? `0${lastMonth}` : lastMonth

        return `${lastDay}/${lastMonth}`
    }

    const renderData = () => {
        const rawDate = showPost?.week_start_date
        const primeiroDia = `${rawDate?.slice(8, 10)}/${rawDate?.slice(5, 7)}`
        const ultimoDia = getUltimoDia(rawDate?rawDate:'')

        return <> {primeiroDia} à {ultimoDia} </> 
    }

    const renderTraining = () => (
        <div className="trainingContainer">
            <header>
                <div className="seta">
                    {
                        allPosts && postPosicao !== allPosts.length-1
                        &&
                        <MdNavigateBefore
                        color= 'var(--orange)'
                        size = {35}
                        onClick={postAnterior}
                        cursor="pointer"
                        />
                    }
                    
                </div>
                {/* <img src={ImageTraining} alt="titulo-image"/> */}
                <div className="tituloTraining">
                    <h1> Treinos da <span>semana</span></h1>
                    <span>
                        {renderData()}
                    </span>
                </div>
                <div className="seta">
                    {
                        postPosicao !== 0 
                        &&
                        <MdNavigateNext
                        color= 'var(--orange)'
                        size = {35}
                        onClick={postProximo}
                        cursor="pointer"
                    />
                    }
                </div>
            </header>
            <main>
                <div className="info">
                    <h2>{showPost?.title}</h2>
                    <p>
                        {showPost?.description}
                    </p>
                </div>
                {
                    showPost?.workout_days?.map((workout_day, index)=>{
                        return(
                            <article className="trainingDay" key={index}>
                                <div className="day">
                                    <span>{workout_day.day_of_workout?.slice(8, 10)}</span>
                                    <span>{workout_day.day_of_workout?.slice(5, 7)}</span>
                                </div>
                                <div>
                                    <div className="infoDay">
                                        <h2>{dias_da_semana[index]}</h2>
                                        <span>Treinador: {workout_day.coach}</span>
                                        <div className="separate">
                                        </div>
                                    </div>
                                    <div className="training">
                                        <div>
                                            <strong>WARMUP</strong>
                                            <ul>
                                            {
                                                workout_day?.day_exercises?.filter(register => register.exercise_category === 'WARMUP').map((day_exercise, index) => {
                                                    return <li key={index}>{day_exercise.exercise_repetitions} - {day_exercise.exercise_name}</li>
                                                })
                                            }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="training">
                                        <div>
                                            <strong>SKILL</strong>
                                            <ul>
                                                {
                                                    workout_day?.day_exercises?.filter(register => register.exercise_category === 'SKILL').map((day_exercise, index) => {
                                                        return <li key={index}>{day_exercise.exercise_repetitions} - {day_exercise.exercise_name}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="training">
                                        <div>
                                            <strong>WOD</strong>
                                            <ul>
                                                {
                                                    workout_day?.day_exercises?.filter(register => register.exercise_category === 'WOD').map((day_exercise, index) => {
                                                        return <li key={index}>{day_exercise.exercise_repetitions} - {day_exercise.exercise_name}</li>
                                                    })
                                                } 
                                            </ul> 
                                        </div>
                                    </div>    
                                </div>
                            </article>
                        )
                    }) 
                }
            </main>
        </div>
    ) 

    return allPosts ? renderTraining() : <></>
    }