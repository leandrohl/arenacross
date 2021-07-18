
export const TrainingService = () => {
    const url = "https://arenacross.herokuapp.com/posts/get"

    return fetch(url, {
        method: 'GET'
    })
}