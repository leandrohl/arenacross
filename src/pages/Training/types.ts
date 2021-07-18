export interface DayExercises{
    exercise_name?: string,
    exercise_category?: string,
    exercise_repetitions?: string
}

export interface WorkoutDays {
    coach?: string, 
    day_of_workout?: string, 
    day_exercises?: DayExercises[]
}

export interface Trainings {
    id?: number,
    title?: string, 
    description?: string,
    week_start_date?: string,
    workout_days?: WorkoutDays[]

}

export interface TrainingsProps{
    latestPost: Trainings,
    allPosts: Trainings[]
  }