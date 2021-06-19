import { useState, useEffect, useCallback } from 'react';

import {IoIosArrowDown, IoIosArrowBack} from 'react-icons/io'

import ImageTraining from '../../assets/crossfit.png' 

import {
    DayExercises,
    TrainingsProps,
    Trainings,
    WorkoutDays
} from './types'

import './styles.css'

import posts from '../../db.json'
  
export default function Training({latestPost, allPosts}: TrainingsProps){

    const wasOpen = useCallback(() => {
        console.log(posts)
    }, [])

    useEffect(() => {
        wasOpen()
    }, [])

    const [activeArrow, setActiveArrow] = useState(false)

    function openDescription(){
        setActiveArrow(!activeArrow)
    }

    return(
        <div className="trainingContainer">
            <header>
                {/* <img src={ImageTraining} alt="titulo-image"/> */}
                <div className="tituloTraining">
                    <h1> Treinos da <span>semana</span></h1>
                    <span>
                        10/05 à 14/05
                    </span>
                </div>
            </header>
            {/* <main>
                <div className="info">
                    <h2>{latestPost.title}</h2>
                    <p>
                        {latestPost.description}
                    </p>
                </div>
                {
                    latestPost.workout_days.map((workout_day)=>{
                        return(
                            <article className="trainingDay" key={workout_day.weekday_id}>
                                <div className="day">
                                    <span>{workout_day.weekday_id.slice(0, 2)}</span>
                                    <span>{workout_day.weekday_id.slice(2, 4)}</span>
                                </div>
                                <div>
                                    <div className="infoDay">
                                        <h2>{workout_day.weekday}</h2>
                                        <span>Treinador: {workout_day.coach}</span>
                                        <div className="separate">
                                            <div>

                                            </div>
                                            {
                                                activeArrow ?
                                                <IoIosArrowDown
                                                color= 'var(--gray-dark)'
                                                size = {20}
                                                onClick={openDescription}
                                                />
                                                :
                                                <IoIosArrowBack
                                                color= 'var(--gray-dark)'
                                                size = {20}
                                                onClick={openDescription}
                                                />
                                            }
                                            
                                        </div>
                                    </div>
                                    <div className="training">
                                        <div>
                                            <strong>WARMUP</strong>
                                            <ul>
                                            {
                                                workout_day.day_exercises.filter(register => register.category == 'warmup').map(day_exercise => {
                                                    return <li key={day_exercise.exercise_id}>{day_exercise.repetitions} - {day_exercise.exercise_name}</li>
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
                                                    workout_day.day_exercises.filter(register => register.category == 'skill').map(day_exercise => {
                                                        return <li key={day_exercise.exercise_id}>{day_exercise.repetitions} - {day_exercise.exercise_name}</li>
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
                                                    workout_day.day_exercises.filter(register => register.category == 'wod').map(day_exercise => {
                                                        return <li key={day_exercise.exercise_id}>{day_exercise.repetitions} - {day_exercise.exercise_name}</li>
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
            </main> */}
        </div>
    )
}