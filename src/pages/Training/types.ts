export interface DayExercises{
    exercise_id: string,
    category: string, 
    exercise_name: string,
    repetitions: string
}

export interface WorkoutDays {
    weekday_id: string,
    coach: string, 
    weekday: string, 
    day_exercises: DayExercises[]
}

export interface Trainings {
    id: number,
    title: string, 
    description: string,
    image: string,
    workout_days: WorkoutDays[]

}

export interface TrainingsProps{
    latestPost: Trainings,
    allPosts: Trainings[]
  }